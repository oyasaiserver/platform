// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}
*/
export class DnsZoneTransfersIncoming extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_dns_zone_transfers_incoming";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersIncoming to import
    * @param importFromId The id of the existing DnsZoneTransfersIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_incoming", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersIncomingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_incoming',
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
        this._autoRefreshSeconds = config.autoRefreshSeconds;
        this._name = config.name;
        this._peers = config.peers;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_refresh_seconds - computed: true, optional: true, required: false
    _autoRefreshSeconds;
    get autoRefreshSeconds() {
        return this.getNumberAttribute('auto_refresh_seconds');
    }
    set autoRefreshSeconds(value) {
        this._autoRefreshSeconds = value;
    }
    resetAutoRefreshSeconds() {
        this._autoRefreshSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRefreshSecondsInput() {
        return this._autoRefreshSeconds;
    }
    // checked_time - computed: true, optional: false, required: false
    get checkedTime() {
        return this.getStringAttribute('checked_time');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_time - computed: true, optional: false, required: false
    get modifiedTime() {
        return this.getStringAttribute('modified_time');
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
    // peers - computed: false, optional: false, required: true
    _peers;
    get peers() {
        return cdktf.Fn.tolist(this.getListAttribute('peers'));
    }
    set peers(value) {
        this._peers = value;
    }
    // Temporarily expose input value. Use with caution.
    get peersInput() {
        return this._peers;
    }
    // soa_serial - computed: true, optional: false, required: false
    get soaSerial() {
        return this.getNumberAttribute('soa_serial');
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
            auto_refresh_seconds: cdktf.numberToTerraform(this._autoRefreshSeconds),
            name: cdktf.stringToTerraform(this._name),
            peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auto_refresh_seconds: {
                value: cdktf.numberToHclTerraform(this._autoRefreshSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
