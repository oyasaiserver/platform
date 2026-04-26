// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function certificatePackCertificatesGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function certificatePackCertificatesGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CertificatePackCertificatesGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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
    // label - computed: true, optional: false, required: false
    get label() {
        return this.getStringAttribute('label');
    }
}
export function certificatePackCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function certificatePackCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CertificatePackCertificatesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // bundle_method - computed: true, optional: false, required: false
    get bundleMethod() {
        return this.getStringAttribute('bundle_method');
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // geo_restrictions - computed: true, optional: false, required: false
    _geoRestrictions = new CertificatePackCertificatesGeoRestrictionsOutputReference(this, "geo_restrictions");
    get geoRestrictions() {
        return this._geoRestrictions;
    }
    // hosts - computed: true, optional: false, required: false
    get hosts() {
        return this.getListAttribute('hosts');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // signature - computed: true, optional: false, required: false
    get signature() {
        return this.getStringAttribute('signature');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // uploaded_on - computed: true, optional: false, required: false
    get uploadedOn() {
        return this.getStringAttribute('uploaded_on');
    }
    // zone_id - computed: true, optional: false, required: false
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
}
export class CertificatePackCertificatesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new CertificatePackCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function certificatePackDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function certificatePackDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CertificatePackDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // cname - computed: true, optional: false, required: false
    get cname() {
        return this.getStringAttribute('cname');
    }
    // cname_target - computed: true, optional: false, required: false
    get cnameTarget() {
        return this.getStringAttribute('cname_target');
    }
    // emails - computed: true, optional: false, required: false
    get emails() {
        return this.getListAttribute('emails');
    }
    // http_body - computed: true, optional: false, required: false
    get httpBody() {
        return this.getStringAttribute('http_body');
    }
    // http_url - computed: true, optional: false, required: false
    get httpUrl() {
        return this.getStringAttribute('http_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // txt_name - computed: true, optional: false, required: false
    get txtName() {
        return this.getStringAttribute('txt_name');
    }
    // txt_value - computed: true, optional: false, required: false
    get txtValue() {
        return this.getStringAttribute('txt_value');
    }
}
export class CertificatePackDcvDelegationRecordsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new CertificatePackDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function certificatePackValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function certificatePackValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CertificatePackValidationErrorsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
}
export class CertificatePackValidationErrorsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new CertificatePackValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function certificatePackValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function certificatePackValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CertificatePackValidationRecordsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // cname - computed: true, optional: false, required: false
    get cname() {
        return this.getStringAttribute('cname');
    }
    // cname_target - computed: true, optional: false, required: false
    get cnameTarget() {
        return this.getStringAttribute('cname_target');
    }
    // emails - computed: true, optional: false, required: false
    get emails() {
        return this.getListAttribute('emails');
    }
    // http_body - computed: true, optional: false, required: false
    get httpBody() {
        return this.getStringAttribute('http_body');
    }
    // http_url - computed: true, optional: false, required: false
    get httpUrl() {
        return this.getStringAttribute('http_url');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // txt_name - computed: true, optional: false, required: false
    get txtName() {
        return this.getStringAttribute('txt_name');
    }
    // txt_value - computed: true, optional: false, required: false
    get txtValue() {
        return this.getStringAttribute('txt_value');
    }
}
export class CertificatePackValidationRecordsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new CertificatePackValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack}
*/
export class CertificatePack extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_certificate_pack";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificatePack to import
    * @param importFromId The id of the existing CertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificatePack to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_pack", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificatePackConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_certificate_pack',
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
        this._certificateAuthority = config.certificateAuthority;
        this._cloudflareBranding = config.cloudflareBranding;
        this._hosts = config.hosts;
        this._type = config.type;
        this._validationMethod = config.validationMethod;
        this._validityDays = config.validityDays;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate_authority - computed: false, optional: false, required: true
    _certificateAuthority;
    get certificateAuthority() {
        return this.getStringAttribute('certificate_authority');
    }
    set certificateAuthority(value) {
        this._certificateAuthority = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateAuthorityInput() {
        return this._certificateAuthority;
    }
    // certificates - computed: true, optional: false, required: false
    _certificates = new CertificatePackCertificatesList(this, "certificates", false);
    get certificates() {
        return this._certificates;
    }
    // cloudflare_branding - computed: false, optional: true, required: false
    _cloudflareBranding;
    get cloudflareBranding() {
        return this.getBooleanAttribute('cloudflare_branding');
    }
    set cloudflareBranding(value) {
        this._cloudflareBranding = value;
    }
    resetCloudflareBranding() {
        this._cloudflareBranding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudflareBrandingInput() {
        return this._cloudflareBranding;
    }
    // dcv_delegation_records - computed: true, optional: false, required: false
    _dcvDelegationRecords = new CertificatePackDcvDelegationRecordsList(this, "dcv_delegation_records", false);
    get dcvDelegationRecords() {
        return this._dcvDelegationRecords;
    }
    // hosts - computed: true, optional: true, required: false
    _hosts;
    get hosts() {
        return cdktf.Fn.tolist(this.getListAttribute('hosts'));
    }
    set hosts(value) {
        this._hosts = value;
    }
    resetHosts() {
        this._hosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostsInput() {
        return this._hosts;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // primary_certificate - computed: true, optional: false, required: false
    get primaryCertificate() {
        return this.getStringAttribute('primary_certificate');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // validation_errors - computed: true, optional: false, required: false
    _validationErrors = new CertificatePackValidationErrorsList(this, "validation_errors", false);
    get validationErrors() {
        return this._validationErrors;
    }
    // validation_method - computed: false, optional: false, required: true
    _validationMethod;
    get validationMethod() {
        return this.getStringAttribute('validation_method');
    }
    set validationMethod(value) {
        this._validationMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get validationMethodInput() {
        return this._validationMethod;
    }
    // validation_records - computed: true, optional: false, required: false
    _validationRecords = new CertificatePackValidationRecordsList(this, "validation_records", false);
    get validationRecords() {
        return this._validationRecords;
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
            certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
            cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
            hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
            type: cdktf.stringToTerraform(this._type),
            validation_method: cdktf.stringToTerraform(this._validationMethod),
            validity_days: cdktf.numberToTerraform(this._validityDays),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            certificate_authority: {
                value: cdktf.stringToHclTerraform(this._certificateAuthority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cloudflare_branding: {
                value: cdktf.booleanToHclTerraform(this._cloudflareBranding),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            hosts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_method: {
                value: cdktf.stringToHclTerraform(this._validationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
