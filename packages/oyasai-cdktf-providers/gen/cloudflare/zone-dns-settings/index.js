// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zoneDnsSettingsInternalDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        reference_zone_id: cdktf.stringToTerraform(struct.referenceZoneId),
    };
}
export function zoneDnsSettingsInternalDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        reference_zone_id: {
            value: cdktf.stringToHclTerraform(struct.referenceZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneDnsSettingsInternalDnsOutputReference extends cdktf.ComplexObject {
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
        if (this._referenceZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceZoneId = this._referenceZoneId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._referenceZoneId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._referenceZoneId = value.referenceZoneId;
        }
    }
    // reference_zone_id - computed: false, optional: true, required: false
    _referenceZoneId;
    get referenceZoneId() {
        return this.getStringAttribute('reference_zone_id');
    }
    set referenceZoneId(value) {
        this._referenceZoneId = value;
    }
    resetReferenceZoneId() {
        this._referenceZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referenceZoneIdInput() {
        return this._referenceZoneId;
    }
}
export function zoneDnsSettingsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ns_set: cdktf.numberToTerraform(struct.nsSet),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function zoneDnsSettingsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ns_set: {
            value: cdktf.numberToHclTerraform(struct.nsSet),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneDnsSettingsNameserversOutputReference extends cdktf.ComplexObject {
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
        if (this._nsSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsSet = this._nsSet;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nsSet = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nsSet = value.nsSet;
            this._type = value.type;
        }
    }
    // ns_set - computed: false, optional: true, required: false
    _nsSet;
    get nsSet() {
        return this.getNumberAttribute('ns_set');
    }
    set nsSet(value) {
        this._nsSet = value;
    }
    resetNsSet() {
        this._nsSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nsSetInput() {
        return this._nsSet;
    }
    // type - computed: false, optional: true, required: false
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
}
export function zoneDnsSettingsSoaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expire: cdktf.numberToTerraform(struct.expire),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        mname: cdktf.stringToTerraform(struct.mname),
        refresh: cdktf.numberToTerraform(struct.refresh),
        retry: cdktf.numberToTerraform(struct.retry),
        rname: cdktf.stringToTerraform(struct.rname),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
export function zoneDnsSettingsSoaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expire: {
            value: cdktf.numberToHclTerraform(struct.expire),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_ttl: {
            value: cdktf.numberToHclTerraform(struct.minTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mname: {
            value: cdktf.stringToHclTerraform(struct.mname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh: {
            value: cdktf.numberToHclTerraform(struct.refresh),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retry: {
            value: cdktf.numberToHclTerraform(struct.retry),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rname: {
            value: cdktf.stringToHclTerraform(struct.rname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneDnsSettingsSoaOutputReference extends cdktf.ComplexObject {
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
        if (this._expire !== undefined) {
            hasAnyValues = true;
            internalValueResult.expire = this._expire;
        }
        if (this._minTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTtl = this._minTtl;
        }
        if (this._mname !== undefined) {
            hasAnyValues = true;
            internalValueResult.mname = this._mname;
        }
        if (this._refresh !== undefined) {
            hasAnyValues = true;
            internalValueResult.refresh = this._refresh;
        }
        if (this._retry !== undefined) {
            hasAnyValues = true;
            internalValueResult.retry = this._retry;
        }
        if (this._rname !== undefined) {
            hasAnyValues = true;
            internalValueResult.rname = this._rname;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expire = undefined;
            this._minTtl = undefined;
            this._mname = undefined;
            this._refresh = undefined;
            this._retry = undefined;
            this._rname = undefined;
            this._ttl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expire = value.expire;
            this._minTtl = value.minTtl;
            this._mname = value.mname;
            this._refresh = value.refresh;
            this._retry = value.retry;
            this._rname = value.rname;
            this._ttl = value.ttl;
        }
    }
    // expire - computed: false, optional: true, required: false
    _expire;
    get expire() {
        return this.getNumberAttribute('expire');
    }
    set expire(value) {
        this._expire = value;
    }
    resetExpire() {
        this._expire = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expireInput() {
        return this._expire;
    }
    // min_ttl - computed: false, optional: true, required: false
    _minTtl;
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    set minTtl(value) {
        this._minTtl = value;
    }
    resetMinTtl() {
        this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minTtlInput() {
        return this._minTtl;
    }
    // mname - computed: false, optional: true, required: false
    _mname;
    get mname() {
        return this.getStringAttribute('mname');
    }
    set mname(value) {
        this._mname = value;
    }
    resetMname() {
        this._mname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mnameInput() {
        return this._mname;
    }
    // refresh - computed: false, optional: true, required: false
    _refresh;
    get refresh() {
        return this.getNumberAttribute('refresh');
    }
    set refresh(value) {
        this._refresh = value;
    }
    resetRefresh() {
        this._refresh = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshInput() {
        return this._refresh;
    }
    // retry - computed: false, optional: true, required: false
    _retry;
    get retry() {
        return this.getNumberAttribute('retry');
    }
    set retry(value) {
        this._retry = value;
    }
    resetRetry() {
        this._retry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryInput() {
        return this._retry;
    }
    // rname - computed: false, optional: true, required: false
    _rname;
    get rname() {
        return this.getStringAttribute('rname');
    }
    set rname(value) {
        this._rname = value;
    }
    resetRname() {
        this._rname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rnameInput() {
        return this._rname;
    }
    // ttl - computed: false, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}
*/
export class ZoneDnsSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_dns_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneDnsSettings to import
    * @param importFromId The id of the existing ZoneDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneDnsSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dns_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneDnsSettingsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone_dns_settings',
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
        this._flattenAllCnames = config.flattenAllCnames;
        this._foundationDns = config.foundationDns;
        this._internalDns.internalValue = config.internalDns;
        this._multiProvider = config.multiProvider;
        this._nameservers.internalValue = config.nameservers;
        this._nsTtl = config.nsTtl;
        this._secondaryOverrides = config.secondaryOverrides;
        this._soa.internalValue = config.soa;
        this._zoneId = config.zoneId;
        this._zoneMode = config.zoneMode;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // flatten_all_cnames - computed: false, optional: true, required: false
    _flattenAllCnames;
    get flattenAllCnames() {
        return this.getBooleanAttribute('flatten_all_cnames');
    }
    set flattenAllCnames(value) {
        this._flattenAllCnames = value;
    }
    resetFlattenAllCnames() {
        this._flattenAllCnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get flattenAllCnamesInput() {
        return this._flattenAllCnames;
    }
    // foundation_dns - computed: false, optional: true, required: false
    _foundationDns;
    get foundationDns() {
        return this.getBooleanAttribute('foundation_dns');
    }
    set foundationDns(value) {
        this._foundationDns = value;
    }
    resetFoundationDns() {
        this._foundationDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get foundationDnsInput() {
        return this._foundationDns;
    }
    // internal_dns - computed: false, optional: true, required: false
    _internalDns = new ZoneDnsSettingsInternalDnsOutputReference(this, "internal_dns");
    get internalDns() {
        return this._internalDns;
    }
    putInternalDns(value) {
        this._internalDns.internalValue = value;
    }
    resetInternalDns() {
        this._internalDns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get internalDnsInput() {
        return this._internalDns.internalValue;
    }
    // multi_provider - computed: false, optional: true, required: false
    _multiProvider;
    get multiProvider() {
        return this.getBooleanAttribute('multi_provider');
    }
    set multiProvider(value) {
        this._multiProvider = value;
    }
    resetMultiProvider() {
        this._multiProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get multiProviderInput() {
        return this._multiProvider;
    }
    // nameservers - computed: false, optional: true, required: false
    _nameservers = new ZoneDnsSettingsNameserversOutputReference(this, "nameservers");
    get nameservers() {
        return this._nameservers;
    }
    putNameservers(value) {
        this._nameservers.internalValue = value;
    }
    resetNameservers() {
        this._nameservers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameserversInput() {
        return this._nameservers.internalValue;
    }
    // ns_ttl - computed: false, optional: true, required: false
    _nsTtl;
    get nsTtl() {
        return this.getNumberAttribute('ns_ttl');
    }
    set nsTtl(value) {
        this._nsTtl = value;
    }
    resetNsTtl() {
        this._nsTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nsTtlInput() {
        return this._nsTtl;
    }
    // secondary_overrides - computed: false, optional: true, required: false
    _secondaryOverrides;
    get secondaryOverrides() {
        return this.getBooleanAttribute('secondary_overrides');
    }
    set secondaryOverrides(value) {
        this._secondaryOverrides = value;
    }
    resetSecondaryOverrides() {
        this._secondaryOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondaryOverridesInput() {
        return this._secondaryOverrides;
    }
    // soa - computed: false, optional: true, required: false
    _soa = new ZoneDnsSettingsSoaOutputReference(this, "soa");
    get soa() {
        return this._soa;
    }
    putSoa(value) {
        this._soa.internalValue = value;
    }
    resetSoa() {
        this._soa.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get soaInput() {
        return this._soa.internalValue;
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
    // zone_mode - computed: false, optional: true, required: false
    _zoneMode;
    get zoneMode() {
        return this.getStringAttribute('zone_mode');
    }
    set zoneMode(value) {
        this._zoneMode = value;
    }
    resetZoneMode() {
        this._zoneMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneModeInput() {
        return this._zoneMode;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            flatten_all_cnames: cdktf.booleanToTerraform(this._flattenAllCnames),
            foundation_dns: cdktf.booleanToTerraform(this._foundationDns),
            internal_dns: zoneDnsSettingsInternalDnsToTerraform(this._internalDns.internalValue),
            multi_provider: cdktf.booleanToTerraform(this._multiProvider),
            nameservers: zoneDnsSettingsNameserversToTerraform(this._nameservers.internalValue),
            ns_ttl: cdktf.numberToTerraform(this._nsTtl),
            secondary_overrides: cdktf.booleanToTerraform(this._secondaryOverrides),
            soa: zoneDnsSettingsSoaToTerraform(this._soa.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            zone_mode: cdktf.stringToTerraform(this._zoneMode),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            flatten_all_cnames: {
                value: cdktf.booleanToHclTerraform(this._flattenAllCnames),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            foundation_dns: {
                value: cdktf.booleanToHclTerraform(this._foundationDns),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            internal_dns: {
                value: zoneDnsSettingsInternalDnsToHclTerraform(this._internalDns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsInternalDns",
            },
            multi_provider: {
                value: cdktf.booleanToHclTerraform(this._multiProvider),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            nameservers: {
                value: zoneDnsSettingsNameserversToHclTerraform(this._nameservers.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsNameservers",
            },
            ns_ttl: {
                value: cdktf.numberToHclTerraform(this._nsTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secondary_overrides: {
                value: cdktf.booleanToHclTerraform(this._secondaryOverrides),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            soa: {
                value: zoneDnsSettingsSoaToHclTerraform(this._soa.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsSoa",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_mode: {
                value: cdktf.stringToHclTerraform(this._zoneMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
