// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function r2CustomDomainStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function r2CustomDomainStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class R2CustomDomainStatusOutputReference extends cdktf.ComplexObject {
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
    // ownership - computed: true, optional: false, required: false
    get ownership() {
        return this.getStringAttribute('ownership');
    }
    // ssl - computed: true, optional: false, required: false
    get ssl() {
        return this.getStringAttribute('ssl');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain}
*/
export class R2CustomDomain extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_r2_custom_domain";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2CustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2CustomDomain to import
    * @param importFromId The id of the existing R2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2CustomDomain to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_custom_domain", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2CustomDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_r2_custom_domain',
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
        this._bucketName = config.bucketName;
        this._ciphers = config.ciphers;
        this._domain = config.domain;
        this._enabled = config.enabled;
        this._jurisdiction = config.jurisdiction;
        this._minTls = config.minTls;
        this._zoneId = config.zoneId;
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
    // bucket_name - computed: false, optional: false, required: true
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // ciphers - computed: false, optional: true, required: false
    _ciphers;
    get ciphers() {
        return this.getListAttribute('ciphers');
    }
    set ciphers(value) {
        this._ciphers = value;
    }
    resetCiphers() {
        this._ciphers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ciphersInput() {
        return this._ciphers;
    }
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
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
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // min_tls - computed: false, optional: true, required: false
    _minTls;
    get minTls() {
        return this.getStringAttribute('min_tls');
    }
    set minTls(value) {
        this._minTls = value;
    }
    resetMinTls() {
        this._minTls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minTlsInput() {
        return this._minTls;
    }
    // status - computed: true, optional: false, required: false
    _status = new R2CustomDomainStatusOutputReference(this, "status");
    get status() {
        return this._status;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // zone_name - computed: true, optional: false, required: false
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphers),
            domain: cdktf.stringToTerraform(this._domain),
            enabled: cdktf.booleanToTerraform(this._enabled),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            min_tls: cdktf.stringToTerraform(this._minTls),
            zone_id: cdktf.stringToTerraform(this._zoneId),
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
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ciphers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciphers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
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
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            min_tls: {
                value: cdktf.stringToHclTerraform(this._minTls),
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
