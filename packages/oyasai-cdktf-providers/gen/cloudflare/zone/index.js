// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zoneAccountToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function zoneAccountToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneAccountOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export function zoneMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zoneMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZoneMetaOutputReference extends cdktf.ComplexObject {
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
    // cdn_only - computed: true, optional: false, required: false
    get cdnOnly() {
        return this.getBooleanAttribute('cdn_only');
    }
    // custom_certificate_quota - computed: true, optional: false, required: false
    get customCertificateQuota() {
        return this.getNumberAttribute('custom_certificate_quota');
    }
    // dns_only - computed: true, optional: false, required: false
    get dnsOnly() {
        return this.getBooleanAttribute('dns_only');
    }
    // foundation_dns - computed: true, optional: false, required: false
    get foundationDns() {
        return this.getBooleanAttribute('foundation_dns');
    }
    // page_rule_quota - computed: true, optional: false, required: false
    get pageRuleQuota() {
        return this.getNumberAttribute('page_rule_quota');
    }
    // phishing_detected - computed: true, optional: false, required: false
    get phishingDetected() {
        return this.getBooleanAttribute('phishing_detected');
    }
    // step - computed: true, optional: false, required: false
    get step() {
        return this.getNumberAttribute('step');
    }
}
export function zoneOwnerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zoneOwnerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZoneOwnerOutputReference extends cdktf.ComplexObject {
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
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function zonePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zonePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZonePlanOutputReference extends cdktf.ComplexObject {
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
    // can_subscribe - computed: true, optional: false, required: false
    get canSubscribe() {
        return this.getBooleanAttribute('can_subscribe');
    }
    // currency - computed: true, optional: false, required: false
    get currency() {
        return this.getStringAttribute('currency');
    }
    // externally_managed - computed: true, optional: false, required: false
    get externallyManaged() {
        return this.getBooleanAttribute('externally_managed');
    }
    // frequency - computed: true, optional: false, required: false
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_subscribed - computed: true, optional: false, required: false
    get isSubscribed() {
        return this.getBooleanAttribute('is_subscribed');
    }
    // legacy_discount - computed: true, optional: false, required: false
    get legacyDiscount() {
        return this.getBooleanAttribute('legacy_discount');
    }
    // legacy_id - computed: true, optional: false, required: false
    get legacyId() {
        return this.getStringAttribute('legacy_id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // price - computed: true, optional: false, required: false
    get price() {
        return this.getNumberAttribute('price');
    }
}
export function zoneTenantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zoneTenantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZoneTenantOutputReference extends cdktf.ComplexObject {
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
export function zoneTenantUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zoneTenantUnitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZoneTenantUnitOutputReference extends cdktf.ComplexObject {
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone}
*/
export class Zone extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Zone to import
    * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Zone to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone',
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
        this._account.internalValue = config.account;
        this._name = config.name;
        this._paused = config.paused;
        this._type = config.type;
        this._vanityNameServers = config.vanityNameServers;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account - computed: false, optional: false, required: true
    _account = new ZoneAccountOutputReference(this, "account");
    get account() {
        return this._account;
    }
    putAccount(value) {
        this._account.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountInput() {
        return this._account.internalValue;
    }
    // activated_on - computed: true, optional: false, required: false
    get activatedOn() {
        return this.getStringAttribute('activated_on');
    }
    // cname_suffix - computed: true, optional: false, required: false
    get cnameSuffix() {
        return this.getStringAttribute('cname_suffix');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // development_mode - computed: true, optional: false, required: false
    get developmentMode() {
        return this.getNumberAttribute('development_mode');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // meta - computed: true, optional: false, required: false
    _meta = new ZoneMetaOutputReference(this, "meta");
    get meta() {
        return this._meta;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
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
    // name_servers - computed: true, optional: false, required: false
    get nameServers() {
        return this.getListAttribute('name_servers');
    }
    // original_dnshost - computed: true, optional: false, required: false
    get originalDnshost() {
        return this.getStringAttribute('original_dnshost');
    }
    // original_name_servers - computed: true, optional: false, required: false
    get originalNameServers() {
        return this.getListAttribute('original_name_servers');
    }
    // original_registrar - computed: true, optional: false, required: false
    get originalRegistrar() {
        return this.getStringAttribute('original_registrar');
    }
    // owner - computed: true, optional: false, required: false
    _owner = new ZoneOwnerOutputReference(this, "owner");
    get owner() {
        return this._owner;
    }
    // paused - computed: true, optional: true, required: false
    _paused;
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    set paused(value) {
        this._paused = value;
    }
    resetPaused() {
        this._paused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pausedInput() {
        return this._paused;
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // plan - computed: true, optional: false, required: false
    _plan = new ZonePlanOutputReference(this, "plan");
    get plan() {
        return this._plan;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tenant - computed: true, optional: false, required: false
    _tenant = new ZoneTenantOutputReference(this, "tenant");
    get tenant() {
        return this._tenant;
    }
    // tenant_unit - computed: true, optional: false, required: false
    _tenantUnit = new ZoneTenantUnitOutputReference(this, "tenant_unit");
    get tenantUnit() {
        return this._tenantUnit;
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
    // vanity_name_servers - computed: true, optional: true, required: false
    _vanityNameServers;
    get vanityNameServers() {
        return this.getListAttribute('vanity_name_servers');
    }
    set vanityNameServers(value) {
        this._vanityNameServers = value;
    }
    resetVanityNameServers() {
        this._vanityNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vanityNameServersInput() {
        return this._vanityNameServers;
    }
    // verification_key - computed: true, optional: false, required: false
    get verificationKey() {
        return this.getStringAttribute('verification_key');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account: zoneAccountToTerraform(this._account.internalValue),
            name: cdktf.stringToTerraform(this._name),
            paused: cdktf.booleanToTerraform(this._paused),
            type: cdktf.stringToTerraform(this._type),
            vanity_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vanityNameServers),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account: {
                value: zoneAccountToHclTerraform(this._account.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneAccount",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vanity_name_servers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vanityNameServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
