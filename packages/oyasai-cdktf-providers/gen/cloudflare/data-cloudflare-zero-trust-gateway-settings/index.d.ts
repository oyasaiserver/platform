import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewaySettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings#account_id DataCloudflareZeroTrustGatewaySettings#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | undefined);
    get enabled(): any;
    get includeContext(): any;
    get msg(): any;
    get supportUrl(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus | undefined);
    get enabledDownloadPhase(): any;
    get enabledUploadPhase(): any;
    get failClosed(): any;
    private _notificationSettings;
    get notificationSettings(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage | undefined);
    get backgroundColor(): any;
    get enabled(): any;
    get footerText(): any;
    get headerText(): any;
    get includeContext(): any;
    get logoPath(): any;
    get mailtoAddress(): any;
    get mailtoSubject(): any;
    get mode(): any;
    get name(): any;
    get readOnly(): any;
    get sourceAccount(): any;
    get suppressFooter(): any;
    get targetUri(): any;
    get version(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning | undefined);
    get inspectionMode(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation | undefined);
    get nonIdentityEnabled(): any;
    get urlBrowserIsolationEnabled(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsCertificate {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate | undefined);
    get id(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate | undefined);
    get bindingStatus(): any;
    get enabled(): any;
    get id(): any;
    get updatedAt(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching | undefined);
    get enabled(): any;
    get readOnly(): any;
    get sourceAccount(): any;
    get version(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsFips {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsFips): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsFips): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsFips | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsFips | undefined);
    get tls(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsInspection {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsInspection): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsInspection): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsInspection | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsInspection | undefined);
    get mode(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsSandbox {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsSandbox | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox | undefined);
    get enabled(): any;
    get fallbackAction(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt | undefined);
    get enabled(): any;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettings {
}
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettings): any;
export declare function dataCloudflareZeroTrustGatewaySettingsSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettings): any;
export declare class DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettings | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettings | undefined);
    private _activityLog;
    get activityLog(): DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
    private _antivirus;
    get antivirus(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
    private _blockPage;
    get blockPage(): DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
    private _bodyScanning;
    get bodyScanning(): DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
    private _browserIsolation;
    get browserIsolation(): DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
    private _certificate;
    get certificate(): DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference;
    private _customCertificate;
    get customCertificate(): DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
    private _extendedEmailMatching;
    get extendedEmailMatching(): DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
    private _fips;
    get fips(): DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference;
    private _hostSelector;
    get hostSelector(): DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
    private _inspection;
    get inspection(): DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference;
    private _protocolDetection;
    get protocolDetection(): DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
    private _sandbox;
    get sandbox(): DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference;
    private _tlsDecrypt;
    get tlsDecrypt(): DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
export declare class DataCloudflareZeroTrustGatewaySettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewaySettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewaySettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewaySettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewaySettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get id(): any;
    private _settings;
    get settings(): DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
