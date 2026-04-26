// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function customSslGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
    };
}
export function customSslGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class CustomSslGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._label = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
        }
    }
    // label - computed: false, optional: true, required: false
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
}
export function customSslKeylessServerTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function customSslKeylessServerTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CustomSslKeylessServerTunnelOutputReference extends cdktf.ComplexObject {
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
    // private_ip - computed: true, optional: false, required: false
    get privateIp() {
        return this.getStringAttribute('private_ip');
    }
    // vnet_id - computed: true, optional: false, required: false
    get vnetId() {
        return this.getStringAttribute('vnet_id');
    }
}
export function customSslKeylessServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function customSslKeylessServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class CustomSslKeylessServerOutputReference extends cdktf.ComplexObject {
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
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tunnel - computed: true, optional: false, required: false
    _tunnel = new CustomSslKeylessServerTunnelOutputReference(this, "tunnel");
    get tunnel() {
        return this._tunnel;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl}
*/
export class CustomSsl extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_custom_ssl";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomSsl to import
    * @param importFromId The id of the existing CustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomSsl to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssl", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomSslConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_custom_ssl',
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
        this._bundleMethod = config.bundleMethod;
        this._certificate = config.certificate;
        this._customCsrId = config.customCsrId;
        this._deploy = config.deploy;
        this._geoRestrictions.internalValue = config.geoRestrictions;
        this._policy = config.policy;
        this._privateKey = config.privateKey;
        this._type = config.type;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // bundle_method - computed: true, optional: true, required: false
    _bundleMethod;
    get bundleMethod() {
        return this.getStringAttribute('bundle_method');
    }
    set bundleMethod(value) {
        this._bundleMethod = value;
    }
    resetBundleMethod() {
        this._bundleMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bundleMethodInput() {
        return this._bundleMethod;
    }
    // certificate - computed: false, optional: false, required: true
    _certificate;
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    set certificate(value) {
        this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate;
    }
    // custom_csr_id - computed: false, optional: true, required: false
    _customCsrId;
    get customCsrId() {
        return this.getStringAttribute('custom_csr_id');
    }
    set customCsrId(value) {
        this._customCsrId = value;
    }
    resetCustomCsrId() {
        this._customCsrId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customCsrIdInput() {
        return this._customCsrId;
    }
    // deploy - computed: false, optional: true, required: false
    _deploy;
    get deploy() {
        return this.getStringAttribute('deploy');
    }
    set deploy(value) {
        this._deploy = value;
    }
    resetDeploy() {
        this._deploy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deployInput() {
        return this._deploy;
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // geo_restrictions - computed: false, optional: true, required: false
    _geoRestrictions = new CustomSslGeoRestrictionsOutputReference(this, "geo_restrictions");
    get geoRestrictions() {
        return this._geoRestrictions;
    }
    putGeoRestrictions(value) {
        this._geoRestrictions.internalValue = value;
    }
    resetGeoRestrictions() {
        this._geoRestrictions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoRestrictionsInput() {
        return this._geoRestrictions.internalValue;
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
    // keyless_server - computed: true, optional: false, required: false
    _keylessServer = new CustomSslKeylessServerOutputReference(this, "keyless_server");
    get keylessServer() {
        return this._keylessServer;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // policy - computed: false, optional: true, required: false
    _policy;
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    // policy_restrictions - computed: true, optional: false, required: false
    get policyRestrictions() {
        return this.getStringAttribute('policy_restrictions');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // private_key - computed: false, optional: false, required: true
    _privateKey;
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
    // signature - computed: true, optional: false, required: false
    get signature() {
        return this.getStringAttribute('signature');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: true, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // uploaded_on - computed: true, optional: false, required: false
    get uploadedOn() {
        return this.getStringAttribute('uploaded_on');
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
            bundle_method: cdktf.stringToTerraform(this._bundleMethod),
            certificate: cdktf.stringToTerraform(this._certificate),
            custom_csr_id: cdktf.stringToTerraform(this._customCsrId),
            deploy: cdktf.stringToTerraform(this._deploy),
            geo_restrictions: customSslGeoRestrictionsToTerraform(this._geoRestrictions.internalValue),
            policy: cdktf.stringToTerraform(this._policy),
            private_key: cdktf.stringToTerraform(this._privateKey),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            bundle_method: {
                value: cdktf.stringToHclTerraform(this._bundleMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate: {
                value: cdktf.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_csr_id: {
                value: cdktf.stringToHclTerraform(this._customCsrId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deploy: {
                value: cdktf.stringToHclTerraform(this._deploy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            geo_restrictions: {
                value: customSslGeoRestrictionsToHclTerraform(this._geoRestrictions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CustomSslGeoRestrictions",
            },
            policy: {
                value: cdktf.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_key: {
                value: cdktf.stringToHclTerraform(this._privateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
