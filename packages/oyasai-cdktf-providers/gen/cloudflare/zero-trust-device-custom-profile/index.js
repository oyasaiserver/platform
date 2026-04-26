// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustDeviceCustomProfileExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        description: cdktf.stringToTerraform(struct.description),
        host: cdktf.stringToTerraform(struct.host),
    };
}
export function zeroTrustDeviceCustomProfileExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDeviceCustomProfileExcludeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._description = undefined;
            this._host = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._description = value.description;
            this._host = value.host;
        }
    }
    // address - computed: true, optional: true, required: false
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // host - computed: true, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
}
export class ZeroTrustDeviceCustomProfileExcludeList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustDeviceCustomProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDeviceCustomProfileFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
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
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // dns_server - computed: true, optional: false, required: false
    get dnsServer() {
        return this.getListAttribute('dns_server');
    }
    // suffix - computed: true, optional: false, required: false
    get suffix() {
        return this.getStringAttribute('suffix');
    }
}
export class ZeroTrustDeviceCustomProfileFallbackDomainsList extends cdktf.ComplexList {
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
        return new ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDeviceCustomProfileIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        description: cdktf.stringToTerraform(struct.description),
        host: cdktf.stringToTerraform(struct.host),
    };
}
export function zeroTrustDeviceCustomProfileIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDeviceCustomProfileIncludeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._description = undefined;
            this._host = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._description = value.description;
            this._host = value.host;
        }
    }
    // address - computed: true, optional: true, required: false
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // host - computed: true, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
}
export class ZeroTrustDeviceCustomProfileIncludeList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustDeviceCustomProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustDeviceCustomProfileServiceModeV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        port: cdktf.numberToTerraform(struct.port),
    };
}
export function zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustDeviceCustomProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._port = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._port = value.port;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // port - computed: true, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
}
export function zeroTrustDeviceCustomProfileTargetTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function zeroTrustDeviceCustomProfileTargetTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ZeroTrustDeviceCustomProfileTargetTestsOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class ZeroTrustDeviceCustomProfileTargetTestsList extends cdktf.ComplexList {
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
        return new ZeroTrustDeviceCustomProfileTargetTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}
*/
export class ZeroTrustDeviceCustomProfile extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_custom_profile";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceCustomProfile to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profile", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceCustomProfileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profile',
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
        this._allowModeSwitch = config.allowModeSwitch;
        this._allowUpdates = config.allowUpdates;
        this._allowedToLeave = config.allowedToLeave;
        this._autoConnect = config.autoConnect;
        this._captivePortal = config.captivePortal;
        this._description = config.description;
        this._disableAutoFallback = config.disableAutoFallback;
        this._enabled = config.enabled;
        this._exclude.internalValue = config.exclude;
        this._excludeOfficeIps = config.excludeOfficeIps;
        this._include.internalValue = config.include;
        this._lanAllowMinutes = config.lanAllowMinutes;
        this._lanAllowSubnetSize = config.lanAllowSubnetSize;
        this._match = config.match;
        this._name = config.name;
        this._precedence = config.precedence;
        this._registerInterfaceIpWithDns = config.registerInterfaceIpWithDns;
        this._sccmVpnBoundarySupport = config.sccmVpnBoundarySupport;
        this._serviceModeV2.internalValue = config.serviceModeV2;
        this._supportUrl = config.supportUrl;
        this._switchLocked = config.switchLocked;
        this._tunnelProtocol = config.tunnelProtocol;
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
    // allow_mode_switch - computed: true, optional: true, required: false
    _allowModeSwitch;
    get allowModeSwitch() {
        return this.getBooleanAttribute('allow_mode_switch');
    }
    set allowModeSwitch(value) {
        this._allowModeSwitch = value;
    }
    resetAllowModeSwitch() {
        this._allowModeSwitch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowModeSwitchInput() {
        return this._allowModeSwitch;
    }
    // allow_updates - computed: true, optional: true, required: false
    _allowUpdates;
    get allowUpdates() {
        return this.getBooleanAttribute('allow_updates');
    }
    set allowUpdates(value) {
        this._allowUpdates = value;
    }
    resetAllowUpdates() {
        this._allowUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUpdatesInput() {
        return this._allowUpdates;
    }
    // allowed_to_leave - computed: true, optional: true, required: false
    _allowedToLeave;
    get allowedToLeave() {
        return this.getBooleanAttribute('allowed_to_leave');
    }
    set allowedToLeave(value) {
        this._allowedToLeave = value;
    }
    resetAllowedToLeave() {
        this._allowedToLeave = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedToLeaveInput() {
        return this._allowedToLeave;
    }
    // auto_connect - computed: true, optional: true, required: false
    _autoConnect;
    get autoConnect() {
        return this.getNumberAttribute('auto_connect');
    }
    set autoConnect(value) {
        this._autoConnect = value;
    }
    resetAutoConnect() {
        this._autoConnect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoConnectInput() {
        return this._autoConnect;
    }
    // captive_portal - computed: true, optional: true, required: false
    _captivePortal;
    get captivePortal() {
        return this.getNumberAttribute('captive_portal');
    }
    set captivePortal(value) {
        this._captivePortal = value;
    }
    resetCaptivePortal() {
        this._captivePortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get captivePortalInput() {
        return this._captivePortal;
    }
    // default - computed: true, optional: false, required: false
    get default() {
        return this.getBooleanAttribute('default');
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // disable_auto_fallback - computed: true, optional: true, required: false
    _disableAutoFallback;
    get disableAutoFallback() {
        return this.getBooleanAttribute('disable_auto_fallback');
    }
    set disableAutoFallback(value) {
        this._disableAutoFallback = value;
    }
    resetDisableAutoFallback() {
        this._disableAutoFallback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableAutoFallbackInput() {
        return this._disableAutoFallback;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // exclude - computed: true, optional: true, required: false
    _exclude = new ZeroTrustDeviceCustomProfileExcludeList(this, "exclude", false);
    get exclude() {
        return this._exclude;
    }
    putExclude(value) {
        this._exclude.internalValue = value;
    }
    resetExclude() {
        this._exclude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeInput() {
        return this._exclude.internalValue;
    }
    // exclude_office_ips - computed: true, optional: true, required: false
    _excludeOfficeIps;
    get excludeOfficeIps() {
        return this.getBooleanAttribute('exclude_office_ips');
    }
    set excludeOfficeIps(value) {
        this._excludeOfficeIps = value;
    }
    resetExcludeOfficeIps() {
        this._excludeOfficeIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeOfficeIpsInput() {
        return this._excludeOfficeIps;
    }
    // fallback_domains - computed: true, optional: false, required: false
    _fallbackDomains = new ZeroTrustDeviceCustomProfileFallbackDomainsList(this, "fallback_domains", false);
    get fallbackDomains() {
        return this._fallbackDomains;
    }
    // gateway_unique_id - computed: true, optional: false, required: false
    get gatewayUniqueId() {
        return this.getStringAttribute('gateway_unique_id');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include - computed: true, optional: true, required: false
    _include = new ZeroTrustDeviceCustomProfileIncludeList(this, "include", false);
    get include() {
        return this._include;
    }
    putInclude(value) {
        this._include.internalValue = value;
    }
    resetInclude() {
        this._include.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeInput() {
        return this._include.internalValue;
    }
    // lan_allow_minutes - computed: false, optional: true, required: false
    _lanAllowMinutes;
    get lanAllowMinutes() {
        return this.getNumberAttribute('lan_allow_minutes');
    }
    set lanAllowMinutes(value) {
        this._lanAllowMinutes = value;
    }
    resetLanAllowMinutes() {
        this._lanAllowMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lanAllowMinutesInput() {
        return this._lanAllowMinutes;
    }
    // lan_allow_subnet_size - computed: false, optional: true, required: false
    _lanAllowSubnetSize;
    get lanAllowSubnetSize() {
        return this.getNumberAttribute('lan_allow_subnet_size');
    }
    set lanAllowSubnetSize(value) {
        this._lanAllowSubnetSize = value;
    }
    resetLanAllowSubnetSize() {
        this._lanAllowSubnetSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lanAllowSubnetSizeInput() {
        return this._lanAllowSubnetSize;
    }
    // match - computed: false, optional: false, required: true
    _match;
    get match() {
        return this.getStringAttribute('match');
    }
    set match(value) {
        this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    get matchInput() {
        return this._match;
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
    // policy_id - computed: true, optional: false, required: false
    get policyId() {
        return this.getStringAttribute('policy_id');
    }
    // precedence - computed: true, optional: true, required: false
    _precedence;
    get precedence() {
        return this.getNumberAttribute('precedence');
    }
    set precedence(value) {
        this._precedence = value;
    }
    resetPrecedence() {
        this._precedence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get precedenceInput() {
        return this._precedence;
    }
    // register_interface_ip_with_dns - computed: true, optional: true, required: false
    _registerInterfaceIpWithDns;
    get registerInterfaceIpWithDns() {
        return this.getBooleanAttribute('register_interface_ip_with_dns');
    }
    set registerInterfaceIpWithDns(value) {
        this._registerInterfaceIpWithDns = value;
    }
    resetRegisterInterfaceIpWithDns() {
        this._registerInterfaceIpWithDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registerInterfaceIpWithDnsInput() {
        return this._registerInterfaceIpWithDns;
    }
    // sccm_vpn_boundary_support - computed: true, optional: true, required: false
    _sccmVpnBoundarySupport;
    get sccmVpnBoundarySupport() {
        return this.getBooleanAttribute('sccm_vpn_boundary_support');
    }
    set sccmVpnBoundarySupport(value) {
        this._sccmVpnBoundarySupport = value;
    }
    resetSccmVpnBoundarySupport() {
        this._sccmVpnBoundarySupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sccmVpnBoundarySupportInput() {
        return this._sccmVpnBoundarySupport;
    }
    // service_mode_v2 - computed: true, optional: true, required: false
    _serviceModeV2 = new ZeroTrustDeviceCustomProfileServiceModeV2OutputReference(this, "service_mode_v2");
    get serviceModeV2() {
        return this._serviceModeV2;
    }
    putServiceModeV2(value) {
        this._serviceModeV2.internalValue = value;
    }
    resetServiceModeV2() {
        this._serviceModeV2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceModeV2Input() {
        return this._serviceModeV2.internalValue;
    }
    // support_url - computed: true, optional: true, required: false
    _supportUrl;
    get supportUrl() {
        return this.getStringAttribute('support_url');
    }
    set supportUrl(value) {
        this._supportUrl = value;
    }
    resetSupportUrl() {
        this._supportUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportUrlInput() {
        return this._supportUrl;
    }
    // switch_locked - computed: true, optional: true, required: false
    _switchLocked;
    get switchLocked() {
        return this.getBooleanAttribute('switch_locked');
    }
    set switchLocked(value) {
        this._switchLocked = value;
    }
    resetSwitchLocked() {
        this._switchLocked = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get switchLockedInput() {
        return this._switchLocked;
    }
    // target_tests - computed: true, optional: false, required: false
    _targetTests = new ZeroTrustDeviceCustomProfileTargetTestsList(this, "target_tests", false);
    get targetTests() {
        return this._targetTests;
    }
    // tunnel_protocol - computed: true, optional: true, required: false
    _tunnelProtocol;
    get tunnelProtocol() {
        return this.getStringAttribute('tunnel_protocol');
    }
    set tunnelProtocol(value) {
        this._tunnelProtocol = value;
    }
    resetTunnelProtocol() {
        this._tunnelProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelProtocolInput() {
        return this._tunnelProtocol;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_mode_switch: cdktf.booleanToTerraform(this._allowModeSwitch),
            allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
            allowed_to_leave: cdktf.booleanToTerraform(this._allowedToLeave),
            auto_connect: cdktf.numberToTerraform(this._autoConnect),
            captive_portal: cdktf.numberToTerraform(this._captivePortal),
            description: cdktf.stringToTerraform(this._description),
            disable_auto_fallback: cdktf.booleanToTerraform(this._disableAutoFallback),
            enabled: cdktf.booleanToTerraform(this._enabled),
            exclude: cdktf.listMapper(zeroTrustDeviceCustomProfileExcludeToTerraform, false)(this._exclude.internalValue),
            exclude_office_ips: cdktf.booleanToTerraform(this._excludeOfficeIps),
            include: cdktf.listMapper(zeroTrustDeviceCustomProfileIncludeToTerraform, false)(this._include.internalValue),
            lan_allow_minutes: cdktf.numberToTerraform(this._lanAllowMinutes),
            lan_allow_subnet_size: cdktf.numberToTerraform(this._lanAllowSubnetSize),
            match: cdktf.stringToTerraform(this._match),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            register_interface_ip_with_dns: cdktf.booleanToTerraform(this._registerInterfaceIpWithDns),
            sccm_vpn_boundary_support: cdktf.booleanToTerraform(this._sccmVpnBoundarySupport),
            service_mode_v2: zeroTrustDeviceCustomProfileServiceModeV2ToTerraform(this._serviceModeV2.internalValue),
            support_url: cdktf.stringToTerraform(this._supportUrl),
            switch_locked: cdktf.booleanToTerraform(this._switchLocked),
            tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
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
            allow_mode_switch: {
                value: cdktf.booleanToHclTerraform(this._allowModeSwitch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_updates: {
                value: cdktf.booleanToHclTerraform(this._allowUpdates),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_to_leave: {
                value: cdktf.booleanToHclTerraform(this._allowedToLeave),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_connect: {
                value: cdktf.numberToHclTerraform(this._autoConnect),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            captive_portal: {
                value: cdktf.numberToHclTerraform(this._captivePortal),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_auto_fallback: {
                value: cdktf.booleanToHclTerraform(this._disableAutoFallback),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustDeviceCustomProfileExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceCustomProfileExcludeList",
            },
            exclude_office_ips: {
                value: cdktf.booleanToHclTerraform(this._excludeOfficeIps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustDeviceCustomProfileIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceCustomProfileIncludeList",
            },
            lan_allow_minutes: {
                value: cdktf.numberToHclTerraform(this._lanAllowMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            lan_allow_subnet_size: {
                value: cdktf.numberToHclTerraform(this._lanAllowSubnetSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            precedence: {
                value: cdktf.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            register_interface_ip_with_dns: {
                value: cdktf.booleanToHclTerraform(this._registerInterfaceIpWithDns),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sccm_vpn_boundary_support: {
                value: cdktf.booleanToHclTerraform(this._sccmVpnBoundarySupport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            service_mode_v2: {
                value: zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(this._serviceModeV2.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDeviceCustomProfileServiceModeV2",
            },
            support_url: {
                value: cdktf.stringToHclTerraform(this._supportUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            switch_locked: {
                value: cdktf.booleanToHclTerraform(this._switchLocked),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tunnel_protocol: {
                value: cdktf.stringToHclTerraform(this._tunnelProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
