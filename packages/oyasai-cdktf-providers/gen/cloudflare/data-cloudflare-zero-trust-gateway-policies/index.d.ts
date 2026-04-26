import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies#account_id DataCloudflareZeroTrustGatewayPolicies#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies#max_items DataCloudflareZeroTrustGatewayPolicies#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultExpiration {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultExpiration): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultExpiration): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultExpiration | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultExpiration | undefined);
    get duration(): any;
    get expired(): any;
    get expiresAt(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh | undefined);
    get commandLogging(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls | undefined);
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage | undefined);
    get includeContext(): any;
    get targetUri(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession | undefined);
    get duration(): any;
    get enforce(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 | undefined);
    get ip(): any;
    get port(): any;
    get routeThroughPrivateNetwork(): any;
    get vnetId(): any;
}
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 | undefined);
    get ip(): any;
    get port(): any;
    get routeThroughPrivateNetwork(): any;
    get vnetId(): any;
}
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers | undefined);
    private _ipv4;
    get ipv4(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List;
    private _ipv6;
    get ipv6(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress | undefined);
    get ipv4(): any;
    get ipv4Fallback(): any;
    get ipv6(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopy {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopy): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopy): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopy | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopy | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override | undefined);
    get ip(): any;
    get port(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings | undefined);
    get enabled(): any;
    get includeContext(): any;
    get msg(): any;
    get supportUrl(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine | undefined);
    get fileTypes(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect | undefined);
    get includeContext(): any;
    get preservePathAndQuery(): any;
    get targetUri(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally | undefined);
    get fallback(): any;
    get viewId(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert | undefined);
    get action(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings | undefined);
    private _addHeaders;
    get addHeaders(): any;
    get allowChildBypass(): any;
    private _auditSsh;
    get auditSsh(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference;
    private _bisoAdminControls;
    get bisoAdminControls(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference;
    private _blockPage;
    get blockPage(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference;
    get blockPageEnabled(): any;
    get blockReason(): any;
    get bypassParentRule(): any;
    private _checkSession;
    get checkSession(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference;
    private _dnsResolvers;
    get dnsResolvers(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference;
    private _egress;
    get egress(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference;
    private _forensicCopy;
    get forensicCopy(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference;
    get ignoreCnameCategoryMatches(): any;
    get insecureDisableDnssecValidation(): any;
    get ipCategories(): any;
    get ipIndicatorFeeds(): any;
    private _l4Override;
    get l4Override(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference;
    private _notificationSettings;
    get notificationSettings(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference;
    get overrideHost(): any;
    get overrideIps(): any;
    private _payloadLog;
    get payloadLog(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference;
    private _quarantine;
    get quarantine(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference;
    private _redirect;
    get redirect(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference;
    private _resolveDnsInternally;
    get resolveDnsInternally(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference;
    get resolveDnsThroughCloudflare(): any;
    private _untrustedCert;
    get untrustedCert(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultSchedule {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultSchedule): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultSchedule): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultSchedule | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultSchedule | undefined);
    get fri(): any;
    get mon(): any;
    get sat(): any;
    get sun(): any;
    get thu(): any;
    get timeZone(): any;
    get tue(): any;
    get wed(): any;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResult {
}
export declare function dataCloudflareZeroTrustGatewayPoliciesResultToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResult): any;
export declare function dataCloudflareZeroTrustGatewayPoliciesResultToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResult): any;
export declare class DataCloudflareZeroTrustGatewayPoliciesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResult | undefined);
    get action(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get description(): any;
    get devicePosture(): any;
    get enabled(): any;
    private _expiration;
    get expiration(): DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference;
    get filters(): any;
    get id(): any;
    get identity(): any;
    get name(): any;
    get precedence(): any;
    get readOnly(): any;
    private _ruleSettings;
    get ruleSettings(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference;
    private _schedule;
    get schedule(): DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference;
    get sharable(): any;
    get sourceAccount(): any;
    get traffic(): any;
    get updatedAt(): any;
    get version(): any;
    get warningStatus(): any;
}
export declare class DataCloudflareZeroTrustGatewayPoliciesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies}
*/
export declare class DataCloudflareZeroTrustGatewayPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_policies";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicies to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewayPoliciesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustGatewayPoliciesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
