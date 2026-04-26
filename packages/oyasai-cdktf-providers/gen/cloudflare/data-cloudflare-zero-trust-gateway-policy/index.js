// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
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
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getNumberAttribute('duration');
    }
    // expired - computed: true, optional: false, required: false
    get expired() {
        return this.getBooleanAttribute('expired');
    }
    // expires_at - computed: true, optional: false, required: false
    get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
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
    // command_logging - computed: true, optional: false, required: false
    get commandLogging() {
        return this.getBooleanAttribute('command_logging');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
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
    // copy - computed: true, optional: false, required: false
    get copy() {
        return this.getStringAttribute('copy');
    }
    // dcp - computed: true, optional: false, required: false
    get dcp() {
        return this.getBooleanAttribute('dcp');
    }
    // dd - computed: true, optional: false, required: false
    get dd() {
        return this.getBooleanAttribute('dd');
    }
    // dk - computed: true, optional: false, required: false
    get dk() {
        return this.getBooleanAttribute('dk');
    }
    // download - computed: true, optional: false, required: false
    get download() {
        return this.getStringAttribute('download');
    }
    // dp - computed: true, optional: false, required: false
    get dp() {
        return this.getBooleanAttribute('dp');
    }
    // du - computed: true, optional: false, required: false
    get du() {
        return this.getBooleanAttribute('du');
    }
    // keyboard - computed: true, optional: false, required: false
    get keyboard() {
        return this.getStringAttribute('keyboard');
    }
    // paste - computed: true, optional: false, required: false
    get paste() {
        return this.getStringAttribute('paste');
    }
    // printing - computed: true, optional: false, required: false
    get printing() {
        return this.getStringAttribute('printing');
    }
    // upload - computed: true, optional: false, required: false
    get upload() {
        return this.getStringAttribute('upload');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    // wm_id - computed: true, optional: false, required: false
    get wmId() {
        return this.getStringAttribute('wm_id');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
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
    // include_context - computed: true, optional: false, required: false
    get includeContext() {
        return this.getBooleanAttribute('include_context');
    }
    // target_uri - computed: true, optional: false, required: false
    get targetUri() {
        return this.getStringAttribute('target_uri');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
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
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getStringAttribute('duration');
    }
    // enforce - computed: true, optional: false, required: false
    get enforce() {
        return this.getBooleanAttribute('enforce');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
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
    // ip - computed: true, optional: false, required: false
    get ip() {
        return this.getStringAttribute('ip');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // route_through_private_network - computed: true, optional: false, required: false
    get routeThroughPrivateNetwork() {
        return this.getBooleanAttribute('route_through_private_network');
    }
    // vnet_id - computed: true, optional: false, required: false
    get vnetId() {
        return this.getStringAttribute('vnet_id');
    }
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
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
    // ip - computed: true, optional: false, required: false
    get ip() {
        return this.getStringAttribute('ip');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // route_through_private_network - computed: true, optional: false, required: false
    get routeThroughPrivateNetwork() {
        return this.getBooleanAttribute('route_through_private_network');
    }
    // vnet_id - computed: true, optional: false, required: false
    get vnetId() {
        return this.getStringAttribute('vnet_id');
    }
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
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
        return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
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
    // ipv4 - computed: true, optional: false, required: false
    _ipv4 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
    get ipv4() {
        return this._ipv4;
    }
    // ipv6 - computed: true, optional: false, required: false
    _ipv6 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
    get ipv6() {
        return this._ipv6;
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
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
    // ipv4 - computed: true, optional: false, required: false
    get ipv4() {
        return this.getStringAttribute('ipv4');
    }
    // ipv4_fallback - computed: true, optional: false, required: false
    get ipv4Fallback() {
        return this.getStringAttribute('ipv4_fallback');
    }
    // ipv6 - computed: true, optional: false, required: false
    get ipv6() {
        return this.getStringAttribute('ipv6');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
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
    // ip - computed: true, optional: false, required: false
    get ip() {
        return this.getStringAttribute('ip');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // include_context - computed: true, optional: false, required: false
    get includeContext() {
        return this.getBooleanAttribute('include_context');
    }
    // msg - computed: true, optional: false, required: false
    get msg() {
        return this.getStringAttribute('msg');
    }
    // support_url - computed: true, optional: false, required: false
    get supportUrl() {
        return this.getStringAttribute('support_url');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
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
    // file_types - computed: true, optional: false, required: false
    get fileTypes() {
        return this.getListAttribute('file_types');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
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
    // include_context - computed: true, optional: false, required: false
    get includeContext() {
        return this.getBooleanAttribute('include_context');
    }
    // preserve_path_and_query - computed: true, optional: false, required: false
    get preservePathAndQuery() {
        return this.getBooleanAttribute('preserve_path_and_query');
    }
    // target_uri - computed: true, optional: false, required: false
    get targetUri() {
        return this.getStringAttribute('target_uri');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
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
    // fallback - computed: true, optional: false, required: false
    get fallback() {
        return this.getStringAttribute('fallback');
    }
    // view_id - computed: true, optional: false, required: false
    get viewId() {
        return this.getStringAttribute('view_id');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
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
    // action - computed: true, optional: false, required: false
    get action() {
        return this.getStringAttribute('action');
    }
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
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
    // add_headers - computed: true, optional: false, required: false
    _addHeaders = new cdktf.StringListMap(this, "add_headers");
    get addHeaders() {
        return this._addHeaders;
    }
    // allow_child_bypass - computed: true, optional: false, required: false
    get allowChildBypass() {
        return this.getBooleanAttribute('allow_child_bypass');
    }
    // audit_ssh - computed: true, optional: false, required: false
    _auditSsh = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(this, "audit_ssh");
    get auditSsh() {
        return this._auditSsh;
    }
    // biso_admin_controls - computed: true, optional: false, required: false
    _bisoAdminControls = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
    get bisoAdminControls() {
        return this._bisoAdminControls;
    }
    // block_page - computed: true, optional: false, required: false
    _blockPage = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(this, "block_page");
    get blockPage() {
        return this._blockPage;
    }
    // block_page_enabled - computed: true, optional: false, required: false
    get blockPageEnabled() {
        return this.getBooleanAttribute('block_page_enabled');
    }
    // block_reason - computed: true, optional: false, required: false
    get blockReason() {
        return this.getStringAttribute('block_reason');
    }
    // bypass_parent_rule - computed: true, optional: false, required: false
    get bypassParentRule() {
        return this.getBooleanAttribute('bypass_parent_rule');
    }
    // check_session - computed: true, optional: false, required: false
    _checkSession = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(this, "check_session");
    get checkSession() {
        return this._checkSession;
    }
    // dns_resolvers - computed: true, optional: false, required: false
    _dnsResolvers = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
    get dnsResolvers() {
        return this._dnsResolvers;
    }
    // egress - computed: true, optional: false, required: false
    _egress = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(this, "egress");
    get egress() {
        return this._egress;
    }
    // forensic_copy - computed: true, optional: false, required: false
    _forensicCopy = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(this, "forensic_copy");
    get forensicCopy() {
        return this._forensicCopy;
    }
    // ignore_cname_category_matches - computed: true, optional: false, required: false
    get ignoreCnameCategoryMatches() {
        return this.getBooleanAttribute('ignore_cname_category_matches');
    }
    // insecure_disable_dnssec_validation - computed: true, optional: false, required: false
    get insecureDisableDnssecValidation() {
        return this.getBooleanAttribute('insecure_disable_dnssec_validation');
    }
    // ip_categories - computed: true, optional: false, required: false
    get ipCategories() {
        return this.getBooleanAttribute('ip_categories');
    }
    // ip_indicator_feeds - computed: true, optional: false, required: false
    get ipIndicatorFeeds() {
        return this.getBooleanAttribute('ip_indicator_feeds');
    }
    // l4override - computed: true, optional: false, required: false
    _l4Override = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(this, "l4override");
    get l4Override() {
        return this._l4Override;
    }
    // notification_settings - computed: true, optional: false, required: false
    _notificationSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
    get notificationSettings() {
        return this._notificationSettings;
    }
    // override_host - computed: true, optional: false, required: false
    get overrideHost() {
        return this.getStringAttribute('override_host');
    }
    // override_ips - computed: true, optional: false, required: false
    get overrideIps() {
        return this.getListAttribute('override_ips');
    }
    // payload_log - computed: true, optional: false, required: false
    _payloadLog = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(this, "payload_log");
    get payloadLog() {
        return this._payloadLog;
    }
    // quarantine - computed: true, optional: false, required: false
    _quarantine = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(this, "quarantine");
    get quarantine() {
        return this._quarantine;
    }
    // redirect - computed: true, optional: false, required: false
    _redirect = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(this, "redirect");
    get redirect() {
        return this._redirect;
    }
    // resolve_dns_internally - computed: true, optional: false, required: false
    _resolveDnsInternally = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(this, "resolve_dns_internally");
    get resolveDnsInternally() {
        return this._resolveDnsInternally;
    }
    // resolve_dns_through_cloudflare - computed: true, optional: false, required: false
    get resolveDnsThroughCloudflare() {
        return this.getBooleanAttribute('resolve_dns_through_cloudflare');
    }
    // untrusted_cert - computed: true, optional: false, required: false
    _untrustedCert = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
    get untrustedCert() {
        return this._untrustedCert;
    }
}
export function dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
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
    // fri - computed: true, optional: false, required: false
    get fri() {
        return this.getStringAttribute('fri');
    }
    // mon - computed: true, optional: false, required: false
    get mon() {
        return this.getStringAttribute('mon');
    }
    // sat - computed: true, optional: false, required: false
    get sat() {
        return this.getStringAttribute('sat');
    }
    // sun - computed: true, optional: false, required: false
    get sun() {
        return this.getStringAttribute('sun');
    }
    // thu - computed: true, optional: false, required: false
    get thu() {
        return this.getStringAttribute('thu');
    }
    // time_zone - computed: true, optional: false, required: false
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    // tue - computed: true, optional: false, required: false
    get tue() {
        return this.getStringAttribute('tue');
    }
    // wed - computed: true, optional: false, required: false
    get wed() {
        return this.getStringAttribute('wed');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export class DataCloudflareZeroTrustGatewayPolicy extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_gateway_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
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
        this._ruleId = config.ruleId;
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
    // action - computed: true, optional: false, required: false
    get action() {
        return this.getStringAttribute('action');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // deleted_at - computed: true, optional: false, required: false
    get deletedAt() {
        return this.getStringAttribute('deleted_at');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // device_posture - computed: true, optional: false, required: false
    get devicePosture() {
        return this.getStringAttribute('device_posture');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // expiration - computed: true, optional: false, required: false
    _expiration = new DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference(this, "expiration");
    get expiration() {
        return this._expiration;
    }
    // filters - computed: true, optional: false, required: false
    get filters() {
        return this.getListAttribute('filters');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity - computed: true, optional: false, required: false
    get identity() {
        return this.getStringAttribute('identity');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // precedence - computed: true, optional: false, required: false
    get precedence() {
        return this.getNumberAttribute('precedence');
    }
    // read_only - computed: true, optional: false, required: false
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    // rule_id - computed: false, optional: false, required: true
    _ruleId;
    get ruleId() {
        return this.getStringAttribute('rule_id');
    }
    set ruleId(value) {
        this._ruleId = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleIdInput() {
        return this._ruleId;
    }
    // rule_settings - computed: true, optional: false, required: false
    _ruleSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference(this, "rule_settings");
    get ruleSettings() {
        return this._ruleSettings;
    }
    // schedule - computed: true, optional: false, required: false
    _schedule = new DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference(this, "schedule");
    get schedule() {
        return this._schedule;
    }
    // sharable - computed: true, optional: false, required: false
    get sharable() {
        return this.getBooleanAttribute('sharable');
    }
    // source_account - computed: true, optional: false, required: false
    get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    // traffic - computed: true, optional: false, required: false
    get traffic() {
        return this.getStringAttribute('traffic');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // warning_status - computed: true, optional: false, required: false
    get warningStatus() {
        return this.getStringAttribute('warning_status');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
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
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
