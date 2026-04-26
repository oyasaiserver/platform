// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareClientCertificateCertificateAuthorityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareClientCertificateCertificateAuthorityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareClientCertificateCertificateAuthorityOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareClientCertificateFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        offset: cdktf.numberToTerraform(struct.offset),
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function dataCloudflareClientCertificateFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        offset: {
            value: cdktf.numberToHclTerraform(struct.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareClientCertificateFilterOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._limit !== undefined) {
            hasAnyValues = true;
            internalValueResult.limit = this._limit;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limit = undefined;
            this._offset = undefined;
            this._status = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limit = value.limit;
            this._offset = value.offset;
            this._status = value.status;
        }
    }
    // limit - computed: false, optional: true, required: false
    _limit;
    get limit() {
        return this.getNumberAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // offset - computed: false, optional: true, required: false
    _offset;
    get offset() {
        return this.getNumberAttribute('offset');
    }
    set offset(value) {
        this._offset = value;
    }
    resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get offsetInput() {
        return this._offset;
    }
    // status - computed: false, optional: true, required: false
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate}
*/
export class DataCloudflareClientCertificate extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_client_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificate to import
    * @param importFromId The id of the existing DataCloudflareClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareClientCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareClientCertificateConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._clientCertificateId = config.clientCertificateId;
        this._filter.internalValue = config.filter;
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
    _certificateAuthority = new DataCloudflareClientCertificateCertificateAuthorityOutputReference(this, "certificate_authority");
    get certificateAuthority() {
        return this._certificateAuthority;
    }
    // client_certificate_id - computed: false, optional: true, required: false
    _clientCertificateId;
    get clientCertificateId() {
        return this.getStringAttribute('client_certificate_id');
    }
    set clientCertificateId(value) {
        this._clientCertificateId = value;
    }
    resetClientCertificateId() {
        this._clientCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientCertificateIdInput() {
        return this._clientCertificateId;
    }
    // common_name - computed: true, optional: false, required: false
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    // country - computed: true, optional: false, required: false
    get country() {
        return this.getStringAttribute('country');
    }
    // csr - computed: true, optional: false, required: false
    get csr() {
        return this.getStringAttribute('csr');
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareClientCertificateFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
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
    // validity_days - computed: true, optional: false, required: false
    get validityDays() {
        return this.getNumberAttribute('validity_days');
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
            client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
            filter: dataCloudflareClientCertificateFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            client_certificate_id: {
                value: cdktf.stringToHclTerraform(this._clientCertificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareClientCertificateFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareClientCertificateFilter",
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
