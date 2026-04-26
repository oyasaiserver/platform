import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy#account_id DataCloudflareZeroTrustGatewayPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Identify the API resource with a UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy#rule_id DataCloudflareZeroTrustGatewayPolicy#rule_id}
    */
    readonly ruleId: string;
}
export interface DataCloudflareZeroTrustGatewayPolicyExpiration {
}
export declare function dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyExpiration): any;
export declare function dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyExpiration): any;
export declare class DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyExpiration | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyExpiration | undefined);
    get duration(): any;
    get expired(): any;
    get expiresAt(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined);
    get commandLogging(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined);
    get copy(): any;
    get dcp(): any;
    get dd(): any;
    get dk(): any;
    get download(): any;
    get dp(): any;
    get du(): any;
    get keyboard(): any;
    get paste(): any;
    get printing(): any;
    get upload(): any;
    get version(): any;
    get wmId(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage | undefined);
    get includeContext(): any;
    get targetUri(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined);
    get duration(): any;
    get enforce(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | undefined);
    get ip(): any;
    get port(): any;
    get routeThroughPrivateNetwork(): any;
    get vnetId(): any;
}
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | undefined);
    get ip(): any;
    get port(): any;
    get routeThroughPrivateNetwork(): any;
    get vnetId(): any;
}
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined);
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress | undefined);
    get ipv4(): any;
    get ipv4Fallback(): any;
    get ipv6(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopy {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopy): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopy): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopy | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopy | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override | undefined);
    get ip(): any;
    get port(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined);
    get enabled(): any;
    get includeContext(): any;
    get msg(): any;
    get supportUrl(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine | undefined);
    get fileTypes(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect | undefined);
    get includeContext(): any;
    get preservePathAndQuery(): any;
    get targetUri(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | undefined);
    get fallback(): any;
    get viewId(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined);
    get action(): any;
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettings {
}
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettings): any;
export declare function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettings): any;
export declare class DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettings | undefined);
    private _addHeaders;
    get addHeaders(): any;
    get allowChildBypass(): any;
    private _auditSsh;
    get auditSsh(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
    private _bisoAdminControls;
    get bisoAdminControls(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
    private _blockPage;
    get blockPage(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
    get blockPageEnabled(): any;
    get blockReason(): any;
    get bypassParentRule(): any;
    private _checkSession;
    get checkSession(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
    private _dnsResolvers;
    get dnsResolvers(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
    private _egress;
    get egress(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
    private _forensicCopy;
    get forensicCopy(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
    get ignoreCnameCategoryMatches(): any;
    get insecureDisableDnssecValidation(): any;
    get ipCategories(): any;
    get ipIndicatorFeeds(): any;
    private _l4Override;
    get l4Override(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
    private _notificationSettings;
    get notificationSettings(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
    get overrideHost(): any;
    get overrideIps(): any;
    private _payloadLog;
    get payloadLog(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
    private _quarantine;
    get quarantine(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
    private _redirect;
    get redirect(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
    private _resolveDnsInternally;
    get resolveDnsInternally(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
    get resolveDnsThroughCloudflare(): any;
    private _untrustedCert;
    get untrustedCert(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
}
export interface DataCloudflareZeroTrustGatewayPolicySchedule {
}
export declare function dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicySchedule): any;
export declare function dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicySchedule): any;
export declare class DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPolicySchedule | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPolicySchedule | undefined);
    get fri(): any;
    get mon(): any;
    get sat(): any;
    get sun(): any;
    get thu(): any;
    get timeZone(): any;
    get tue(): any;
    get wed(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export declare class DataCloudflareZeroTrustGatewayPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_policy";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get action(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get description(): any;
    get devicePosture(): any;
    get enabled(): any;
    private _expiration;
    get expiration(): DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference;
    get filters(): any;
    get id(): any;
    get identity(): any;
    get name(): any;
    get precedence(): any;
    get readOnly(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    get ruleIdInput(): string;
    private _ruleSettings;
    get ruleSettings(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference;
    private _schedule;
    get schedule(): DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference;
    get sharable(): any;
    get sourceAccount(): any;
    get traffic(): any;
    get updatedAt(): any;
    get version(): any;
    get warningStatus(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
