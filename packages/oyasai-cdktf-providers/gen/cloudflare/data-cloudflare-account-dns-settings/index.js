// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
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
    // reference_zone_id - computed: true, optional: false, required: false
    get referenceZoneId() {
        return this.getStringAttribute('reference_zone_id');
    }
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
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
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
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
    // expire - computed: true, optional: false, required: false
    get expire() {
        return this.getNumberAttribute('expire');
    }
    // min_ttl - computed: true, optional: false, required: false
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    // mname - computed: true, optional: false, required: false
    get mname() {
        return this.getStringAttribute('mname');
    }
    // refresh - computed: true, optional: false, required: false
    get refresh() {
        return this.getNumberAttribute('refresh');
    }
    // retry - computed: true, optional: false, required: false
    get retry() {
        return this.getNumberAttribute('retry');
    }
    // rname - computed: true, optional: false, required: false
    get rname() {
        return this.getStringAttribute('rname');
    }
    // ttl - computed: true, optional: false, required: false
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
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
    // flatten_all_cnames - computed: true, optional: false, required: false
    get flattenAllCnames() {
        return this.getBooleanAttribute('flatten_all_cnames');
    }
    // foundation_dns - computed: true, optional: false, required: false
    get foundationDns() {
        return this.getBooleanAttribute('foundation_dns');
    }
    // internal_dns - computed: true, optional: false, required: false
    _internalDns = new DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
    get internalDns() {
        return this._internalDns;
    }
    // multi_provider - computed: true, optional: false, required: false
    get multiProvider() {
        return this.getBooleanAttribute('multi_provider');
    }
    // nameservers - computed: true, optional: false, required: false
    _nameservers = new DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
    get nameservers() {
        return this._nameservers;
    }
    // ns_ttl - computed: true, optional: false, required: false
    get nsTtl() {
        return this.getNumberAttribute('ns_ttl');
    }
    // secondary_overrides - computed: true, optional: false, required: false
    get secondaryOverrides() {
        return this.getBooleanAttribute('secondary_overrides');
    }
    // soa - computed: true, optional: false, required: false
    _soa = new DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
    get soa() {
        return this._soa;
    }
    // zone_mode - computed: true, optional: false, required: false
    get zoneMode() {
        return this.getStringAttribute('zone_mode');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}
*/
export class DataCloudflareAccountDnsSettings extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_account_dns_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_account_dns_settings',
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
    // enforce_dns_only - computed: true, optional: false, required: false
    get enforceDnsOnly() {
        return this.getBooleanAttribute('enforce_dns_only');
    }
    // zone_defaults - computed: true, optional: false, required: false
    _zoneDefaults = new DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
    get zoneDefaults() {
        return this._zoneDefaults;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
