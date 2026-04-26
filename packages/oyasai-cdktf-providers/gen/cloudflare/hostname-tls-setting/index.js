// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting}
*/
export class HostnameTlsSetting extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_hostname_tls_setting";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HostnameTlsSetting to import
    * @param importFromId The id of the existing HostnameTlsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HostnameTlsSetting to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hostname_tls_setting", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HostnameTlsSettingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_hostname_tls_setting',
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
        this._hostname = config.hostname;
        this._settingId = config.settingId;
        this._value = config.value;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // setting_id - computed: false, optional: false, required: true
    _settingId;
    get settingId() {
        return this.getStringAttribute('setting_id');
    }
    set settingId(value) {
        this._settingId = value;
    }
    // Temporarily expose input value. Use with caution.
    get settingIdInput() {
        return this._settingId;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getAnyMapAttribute('value');
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
            hostname: cdktf.stringToTerraform(this._hostname),
            setting_id: cdktf.stringToTerraform(this._settingId),
            value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            setting_id: {
                value: cdktf.stringToHclTerraform(this._settingId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
                isBlock: false,
                type: "map",
                storageClassType: "anyMap",
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
