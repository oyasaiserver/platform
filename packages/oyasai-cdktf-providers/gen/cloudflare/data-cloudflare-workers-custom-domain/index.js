// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareWorkersCustomDomainFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        hostname: cdktf.stringToTerraform(struct.hostname),
        service: cdktf.stringToTerraform(struct.service),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
export function dataCloudflareWorkersCustomDomainFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareWorkersCustomDomainFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        if (this._zoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneId = this._zoneId;
        }
        if (this._zoneName !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneName = this._zoneName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environment = undefined;
            this._hostname = undefined;
            this._service = undefined;
            this._zoneId = undefined;
            this._zoneName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environment = value.environment;
            this._hostname = value.hostname;
            this._service = value.service;
            this._zoneId = value.zoneId;
            this._zoneName = value.zoneName;
        }
    }
    // environment - computed: false, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // service - computed: false, optional: true, required: false
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
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
    // zone_name - computed: false, optional: true, required: false
    _zoneName;
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    set zoneName(value) {
        this._zoneName = value;
    }
    resetZoneName() {
        this._zoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneNameInput() {
        return this._zoneName;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}
*/
export class DataCloudflareWorkersCustomDomain extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_workers_custom_domain";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import
    * @param importFromId The id of the existing DataCloudflareWorkersCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_custom_domain", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCustomDomainConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_workers_custom_domain',
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
        this._domainId = config.domainId;
        this._filter.internalValue = config.filter;
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
    // cert_id - computed: true, optional: false, required: false
    get certId() {
        return this.getStringAttribute('cert_id');
    }
    // domain_id - computed: false, optional: true, required: false
    _domainId;
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    set domainId(value) {
        this._domainId = value;
    }
    resetDomainId() {
        this._domainId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainIdInput() {
        return this._domainId;
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getStringAttribute('environment');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareWorkersCustomDomainFilterOutputReference(this, "filter");
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
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // service - computed: true, optional: false, required: false
    get service() {
        return this.getStringAttribute('service');
    }
    // zone_id - computed: true, optional: false, required: false
    get zoneId() {
        return this.getStringAttribute('zone_id');
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
            domain_id: cdktf.stringToTerraform(this._domainId),
            filter: dataCloudflareWorkersCustomDomainFilterToTerraform(this._filter.internalValue),
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
            domain_id: {
                value: cdktf.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWorkersCustomDomainFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWorkersCustomDomainFilter",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
