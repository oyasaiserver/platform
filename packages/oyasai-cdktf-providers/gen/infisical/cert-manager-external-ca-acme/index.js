// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme}
*/
export class CertManagerExternalCaAcme extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_external_ca_acme";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerExternalCaAcme resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerExternalCaAcme to import
    * @param importFromId The id of the existing CertManagerExternalCaAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerExternalCaAcme to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_acme", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerExternalCaAcmeConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_cert_manager_external_ca_acme',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountEmail = config.accountEmail;
        this._directoryUrl = config.directoryUrl;
        this._dnsAppConnectionId = config.dnsAppConnectionId;
        this._dnsHostedZoneId = config.dnsHostedZoneId;
        this._dnsProvider = config.dnsProvider;
        this._eabHmacKey = config.eabHmacKey;
        this._eabKid = config.eabKid;
        this._name = config.name;
        this._projectSlug = config.projectSlug;
        this._status = config.status;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_email - computed: false, optional: false, required: true
    _accountEmail;
    get accountEmail() {
        return this.getStringAttribute('account_email');
    }
    set accountEmail(value) {
        this._accountEmail = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountEmailInput() {
        return this._accountEmail;
    }
    // directory_url - computed: false, optional: false, required: true
    _directoryUrl;
    get directoryUrl() {
        return this.getStringAttribute('directory_url');
    }
    set directoryUrl(value) {
        this._directoryUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get directoryUrlInput() {
        return this._directoryUrl;
    }
    // dns_app_connection_id - computed: false, optional: false, required: true
    _dnsAppConnectionId;
    get dnsAppConnectionId() {
        return this.getStringAttribute('dns_app_connection_id');
    }
    set dnsAppConnectionId(value) {
        this._dnsAppConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnsAppConnectionIdInput() {
        return this._dnsAppConnectionId;
    }
    // dns_hosted_zone_id - computed: false, optional: true, required: false
    _dnsHostedZoneId;
    get dnsHostedZoneId() {
        return this.getStringAttribute('dns_hosted_zone_id');
    }
    set dnsHostedZoneId(value) {
        this._dnsHostedZoneId = value;
    }
    resetDnsHostedZoneId() {
        this._dnsHostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsHostedZoneIdInput() {
        return this._dnsHostedZoneId;
    }
    // dns_provider - computed: false, optional: false, required: true
    _dnsProvider;
    get dnsProvider() {
        return this.getStringAttribute('dns_provider');
    }
    set dnsProvider(value) {
        this._dnsProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnsProviderInput() {
        return this._dnsProvider;
    }
    // eab_hmac_key - computed: false, optional: true, required: false
    _eabHmacKey;
    get eabHmacKey() {
        return this.getStringAttribute('eab_hmac_key');
    }
    set eabHmacKey(value) {
        this._eabHmacKey = value;
    }
    resetEabHmacKey() {
        this._eabHmacKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eabHmacKeyInput() {
        return this._eabHmacKey;
    }
    // eab_kid - computed: false, optional: true, required: false
    _eabKid;
    get eabKid() {
        return this.getStringAttribute('eab_kid');
    }
    set eabKid(value) {
        this._eabKid = value;
    }
    resetEabKid() {
        this._eabKid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eabKidInput() {
        return this._eabKid;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
    }
    // status - computed: true, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_email: cdktf.stringToTerraform(this._accountEmail),
            directory_url: cdktf.stringToTerraform(this._directoryUrl),
            dns_app_connection_id: cdktf.stringToTerraform(this._dnsAppConnectionId),
            dns_hosted_zone_id: cdktf.stringToTerraform(this._dnsHostedZoneId),
            dns_provider: cdktf.stringToTerraform(this._dnsProvider),
            eab_hmac_key: cdktf.stringToTerraform(this._eabHmacKey),
            eab_kid: cdktf.stringToTerraform(this._eabKid),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            status: cdktf.stringToTerraform(this._status),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_email: {
                value: cdktf.stringToHclTerraform(this._accountEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            directory_url: {
                value: cdktf.stringToHclTerraform(this._directoryUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_app_connection_id: {
                value: cdktf.stringToHclTerraform(this._dnsAppConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_hosted_zone_id: {
                value: cdktf.stringToHclTerraform(this._dnsHostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_provider: {
                value: cdktf.stringToHclTerraform(this._dnsProvider),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            eab_hmac_key: {
                value: cdktf.stringToHclTerraform(this._eabHmacKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            eab_kid: {
                value: cdktf.stringToHclTerraform(this._eabKid),
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
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
