// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain}
*/
export class WorkersScriptSubdomain extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_workers_script_subdomain";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersScriptSubdomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScriptSubdomain to import
    * @param importFromId The id of the existing WorkersScriptSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScriptSubdomain to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script_subdomain", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script_subdomain cloudflare_workers_script_subdomain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptSubdomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_workers_script_subdomain',
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
        this._enabled = config.enabled;
        this._previewsEnabled = config.previewsEnabled;
        this._scriptName = config.scriptName;
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // previews_enabled - computed: true, optional: true, required: false
    _previewsEnabled;
    get previewsEnabled() {
        return this.getBooleanAttribute('previews_enabled');
    }
    set previewsEnabled(value) {
        this._previewsEnabled = value;
    }
    resetPreviewsEnabled() {
        this._previewsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewsEnabledInput() {
        return this._previewsEnabled;
    }
    // script_name - computed: false, optional: false, required: true
    _scriptName;
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    set scriptName(value) {
        this._scriptName = value;
    }
    // Temporarily expose input value. Use with caution.
    get scriptNameInput() {
        return this._scriptName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            enabled: cdktf.booleanToTerraform(this._enabled),
            previews_enabled: cdktf.booleanToTerraform(this._previewsEnabled),
            script_name: cdktf.stringToTerraform(this._scriptName),
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
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            previews_enabled: {
                value: cdktf.booleanToHclTerraform(this._previewsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
