// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function clientCertificateCertificateAuthorityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function clientCertificateCertificateAuthorityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ClientCertificateCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate}
*/
export class ClientCertificate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_client_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ClientCertificate to import
    * @param importFromId The id of the existing ClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ClientCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ClientCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_client_certificate',
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
        this._csr = config.csr;
        this._reactivate = config.reactivate;
        this._validityDays = config.validityDays;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // certificate_authority - computed: true, optional: false, required: false
    _certificateAuthority = new ClientCertificateCertificateAuthorityOutputReference(this, "certificate_authority");
    get certificateAuthority() {
        return this._certificateAuthority;
    }
    // common_name - computed: true, optional: false, required: false
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    // country - computed: true, optional: false, required: false
    get country() {
        return this.getStringAttribute('country');
    }
    // csr - computed: false, optional: false, required: true
    _csr;
    get csr() {
        return this.getStringAttribute('csr');
    }
    set csr(value) {
        this._csr = value;
    }
    // Temporarily expose input value. Use with caution.
    get csrInput() {
        return this._csr;
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // fingerprint_sha256 - computed: true, optional: false, required: false
    get fingerprintSha256() {
        return this.getStringAttribute('fingerprint_sha256');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // issued_on - computed: true, optional: false, required: false
    get issuedOn() {
        return this.getStringAttribute('issued_on');
    }
    // location - computed: true, optional: false, required: false
    get location() {
        return this.getStringAttribute('location');
    }
    // organization - computed: true, optional: false, required: false
    get organization() {
        return this.getStringAttribute('organization');
    }
    // organizational_unit - computed: true, optional: false, required: false
    get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    // reactivate - computed: false, optional: true, required: false
    _reactivate;
    get reactivate() {
        return this.getBooleanAttribute('reactivate');
    }
    set reactivate(value) {
        this._reactivate = value;
    }
    resetReactivate() {
        this._reactivate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reactivateInput() {
        return this._reactivate;
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // signature - computed: true, optional: false, required: false
    get signature() {
        return this.getStringAttribute('signature');
    }
    // ski - computed: true, optional: false, required: false
    get ski() {
        return this.getStringAttribute('ski');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // validity_days - computed: false, optional: false, required: true
    _validityDays;
    get validityDays() {
        return this.getNumberAttribute('validity_days');
    }
    set validityDays(value) {
        this._validityDays = value;
    }
    // Temporarily expose input value. Use with caution.
    get validityDaysInput() {
        return this._validityDays;
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
            csr: cdktf.stringToTerraform(this._csr),
            reactivate: cdktf.booleanToTerraform(this._reactivate),
            validity_days: cdktf.numberToTerraform(this._validityDays),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reactivate: {
                value: cdktf.booleanToHclTerraform(this._reactivate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validity_days: {
                value: cdktf.numberToHclTerraform(this._validityDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
