// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct) {
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
export function accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct) {
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
export class AccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
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
export function accountDnsSettingsZoneDefaultsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
export class AccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
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
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
        }
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
export function accountDnsSettingsZoneDefaultsSoaToTerraform(struct) {
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
export function accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct) {
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
export class AccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
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
export function accountDnsSettingsZoneDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        flatten_all_cnames: cdktf.booleanToTerraform(struct.flattenAllCnames),
        foundation_dns: cdktf.booleanToTerraform(struct.foundationDns),
        internal_dns: accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct.internalDns),
        multi_provider: cdktf.booleanToTerraform(struct.multiProvider),
        nameservers: accountDnsSettingsZoneDefaultsNameserversToTerraform(struct.nameservers),
        ns_ttl: cdktf.numberToTerraform(struct.nsTtl),
        secondary_overrides: cdktf.booleanToTerraform(struct.secondaryOverrides),
        soa: accountDnsSettingsZoneDefaultsSoaToTerraform(struct.soa),
        zone_mode: cdktf.stringToTerraform(struct.zoneMode),
    };
}
export function accountDnsSettingsZoneDefaultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        flatten_all_cnames: {
            value: cdktf.booleanToHclTerraform(struct.flattenAllCnames),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        foundation_dns: {
            value: cdktf.booleanToHclTerraform(struct.foundationDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        internal_dns: {
            value: accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct.internalDns),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsInternalDns",
        },
        multi_provider: {
            value: cdktf.booleanToHclTerraform(struct.multiProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        nameservers: {
            value: accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct.nameservers),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsNameservers",
        },
        ns_ttl: {
            value: cdktf.numberToHclTerraform(struct.nsTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secondary_overrides: {
            value: cdktf.booleanToHclTerraform(struct.secondaryOverrides),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        soa: {
            value: accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct.soa),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsSoa",
        },
        zone_mode: {
            value: cdktf.stringToHclTerraform(struct.zoneMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
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
        if (this._flattenAllCnames !== undefined) {
            hasAnyValues = true;
            internalValueResult.flattenAllCnames = this._flattenAllCnames;
        }
        if (this._foundationDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.foundationDns = this._foundationDns;
        }
        if (this._internalDns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.internalDns = this._internalDns?.internalValue;
        }
        if (this._multiProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiProvider = this._multiProvider;
        }
        if (this._nameservers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameservers = this._nameservers?.internalValue;
        }
        if (this._nsTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.nsTtl = this._nsTtl;
        }
        if (this._secondaryOverrides !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryOverrides = this._secondaryOverrides;
        }
        if (this._soa?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.soa = this._soa?.internalValue;
        }
        if (this._zoneMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneMode = this._zoneMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flattenAllCnames = undefined;
            this._foundationDns = undefined;
            this._internalDns.internalValue = undefined;
            this._multiProvider = undefined;
            this._nameservers.internalValue = undefined;
            this._nsTtl = undefined;
            this._secondaryOverrides = undefined;
            this._soa.internalValue = undefined;
            this._zoneMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flattenAllCnames = value.flattenAllCnames;
            this._foundationDns = value.foundationDns;
            this._internalDns.internalValue = value.internalDns;
            this._multiProvider = value.multiProvider;
            this._nameservers.internalValue = value.nameservers;
            this._nsTtl = value.nsTtl;
            this._secondaryOverrides = value.secondaryOverrides;
            this._soa.internalValue = value.soa;
            this._zoneMode = value.zoneMode;
        }
    }
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
    _internalDns = new AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
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
    _nameservers = new AccountDnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
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
    _soa = new AccountDnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}
*/
export class AccountDnsSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_account_dns_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountDnsSettings to import
    * @param importFromId The id of the existing AccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountDnsSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountDnsSettingsConfig = {}
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
        this._enforceDnsOnly = config.enforceDnsOnly;
        this._zoneDefaults.internalValue = config.zoneDefaults;
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
    // enforce_dns_only - computed: false, optional: true, required: false
    _enforceDnsOnly;
    get enforceDnsOnly() {
        return this.getBooleanAttribute('enforce_dns_only');
    }
    set enforceDnsOnly(value) {
        this._enforceDnsOnly = value;
    }
    resetEnforceDnsOnly() {
        this._enforceDnsOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforceDnsOnlyInput() {
        return this._enforceDnsOnly;
    }
    // zone_defaults - computed: false, optional: true, required: false
    _zoneDefaults = new AccountDnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
    get zoneDefaults() {
        return this._zoneDefaults;
    }
    putZoneDefaults(value) {
        this._zoneDefaults.internalValue = value;
    }
    resetZoneDefaults() {
        this._zoneDefaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneDefaultsInput() {
        return this._zoneDefaults.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            enforce_dns_only: cdktf.booleanToTerraform(this._enforceDnsOnly),
            zone_defaults: accountDnsSettingsZoneDefaultsToTerraform(this._zoneDefaults.internalValue),
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
            enforce_dns_only: {
                value: cdktf.booleanToHclTerraform(this._enforceDnsOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_defaults: {
                value: accountDnsSettingsZoneDefaultsToHclTerraform(this._zoneDefaults.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountDnsSettingsZoneDefaults",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
