import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustGatewaySettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}
    */
    readonly accountId: string;
    /**
    * Specify account settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#settings ZeroTrustGatewaySettings#settings}
    */
    readonly settings?: ZeroTrustGatewaySettingsSettings;
}
export interface ZeroTrustGatewaySettingsSettingsActivityLog {
    /**
    * Specify whether to log activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct?: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsActivityLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings {
    /**
    * Specify whether to enable notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to include context information as query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#include_context ZeroTrustGatewaySettings#include_context}
    */
    readonly includeContext?: boolean | cdktf.IResolvable;
    /**
    * Specify the message to show in the notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#msg ZeroTrustGatewaySettings#msg}
    */
    readonly msg?: string;
    /**
    * Specify a URL that directs users to more information. If unset, the notification opens a block page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}
    */
    readonly supportUrl?: string;
}
export declare function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _includeContext?;
    get includeContext(): boolean | cdktf.IResolvable;
    set includeContext(value: boolean | cdktf.IResolvable);
    resetIncludeContext(): void;
    get includeContextInput(): any;
    private _msg?;
    get msg(): string;
    set msg(value: string);
    resetMsg(): void;
    get msgInput(): string;
    private _supportUrl?;
    get supportUrl(): string;
    set supportUrl(value: string);
    resetSupportUrl(): void;
    get supportUrlInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsAntivirus {
    /**
    * Specify whether to enable anti-virus scanning on downloads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}
    */
    readonly enabledDownloadPhase?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to enable anti-virus scanning on uploads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}
    */
    readonly enabledUploadPhase?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to block requests for unscannable files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}
    */
    readonly failClosed?: boolean | cdktf.IResolvable;
    /**
    * Configure the message the user's device shows during an antivirus scan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}
    */
    readonly notificationSettings?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings;
}
export declare function zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsAntivirusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable | undefined);
    private _enabledDownloadPhase?;
    get enabledDownloadPhase(): boolean | cdktf.IResolvable;
    set enabledDownloadPhase(value: boolean | cdktf.IResolvable);
    resetEnabledDownloadPhase(): void;
    get enabledDownloadPhaseInput(): any;
    private _enabledUploadPhase?;
    get enabledUploadPhase(): boolean | cdktf.IResolvable;
    set enabledUploadPhase(value: boolean | cdktf.IResolvable);
    resetEnabledUploadPhase(): void;
    get enabledUploadPhaseInput(): any;
    private _failClosed?;
    get failClosed(): boolean | cdktf.IResolvable;
    set failClosed(value: boolean | cdktf.IResolvable);
    resetFailClosed(): void;
    get failClosedInput(): any;
    private _notificationSettings;
    get notificationSettings(): ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
    putNotificationSettings(value: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): void;
    resetNotificationSettings(): void;
    get notificationSettingsInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsBlockPage {
    /**
    * Specify the block page background color in `#rrggbb` format when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Specify whether to enable the custom block page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the block page footer text when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}
    */
    readonly footerText?: string;
    /**
    * Specify the block page header text when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}
    */
    readonly headerText?: string;
    /**
    * Specify whether to append context to target_uri as query parameters. This applies only when the mode is redirect_uri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#include_context ZeroTrustGatewaySettings#include_context}
    */
    readonly includeContext?: boolean | cdktf.IResolvable;
    /**
    * Specify the full URL to the logo file when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}
    */
    readonly logoPath?: string;
    /**
    * Specify the admin email for users to contact when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}
    */
    readonly mailtoAddress?: string;
    /**
    * Specify the subject line for emails created from the block page when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}
    */
    readonly mailtoSubject?: string;
    /**
    * Specify whether to redirect users to a Cloudflare-hosted block page or a customer-provided URI.
    * Available values: "", "customized_block_page", "redirect_uri".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#mode ZeroTrustGatewaySettings#mode}
    */
    readonly mode?: string;
    /**
    * Specify the block page title when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}
    */
    readonly name?: string;
    /**
    * Indicate that this setting was shared via the Orgs API and read only for the current account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#read_only ZeroTrustGatewaySettings#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Indicate the account tag of the account that shared this setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#source_account ZeroTrustGatewaySettings#source_account}
    */
    readonly sourceAccount?: string;
    /**
    * Specify whether to suppress detailed information at the bottom of the block page when the mode is customized_block_page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#suppress_footer ZeroTrustGatewaySettings#suppress_footer}
    */
    readonly suppressFooter?: boolean | cdktf.IResolvable;
    /**
    * Specify the URI to redirect users to when the mode is redirect_uri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#target_uri ZeroTrustGatewaySettings#target_uri}
    */
    readonly targetUri?: string;
    /**
    * Indicate the version number of the setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#version ZeroTrustGatewaySettings#version}
    */
    readonly version?: number;
}
export declare function zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsBlockPageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable | undefined);
    private _backgroundColor?;
    get backgroundColor(): string;
    set backgroundColor(value: string);
    resetBackgroundColor(): void;
    get backgroundColorInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _footerText?;
    get footerText(): string;
    set footerText(value: string);
    resetFooterText(): void;
    get footerTextInput(): string;
    private _headerText?;
    get headerText(): string;
    set headerText(value: string);
    resetHeaderText(): void;
    get headerTextInput(): string;
    private _includeContext?;
    get includeContext(): boolean | cdktf.IResolvable;
    set includeContext(value: boolean | cdktf.IResolvable);
    resetIncludeContext(): void;
    get includeContextInput(): any;
    private _logoPath?;
    get logoPath(): string;
    set logoPath(value: string);
    resetLogoPath(): void;
    get logoPathInput(): string;
    private _mailtoAddress?;
    get mailtoAddress(): string;
    set mailtoAddress(value: string);
    resetMailtoAddress(): void;
    get mailtoAddressInput(): string;
    private _mailtoSubject?;
    get mailtoSubject(): string;
    set mailtoSubject(value: string);
    resetMailtoSubject(): void;
    get mailtoSubjectInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): any;
    private _sourceAccount?;
    get sourceAccount(): string;
    set sourceAccount(value: string);
    resetSourceAccount(): void;
    get sourceAccountInput(): string;
    private _suppressFooter?;
    get suppressFooter(): boolean | cdktf.IResolvable;
    set suppressFooter(value: boolean | cdktf.IResolvable);
    resetSuppressFooter(): void;
    get suppressFooterInput(): any;
    private _targetUri?;
    get targetUri(): string;
    set targetUri(value: string);
    resetTargetUri(): void;
    get targetUriInput(): string;
    private _version?;
    get version(): number;
    set version(value: number);
    resetVersion(): void;
    get versionInput(): number;
}
export interface ZeroTrustGatewaySettingsSettingsBodyScanning {
    /**
    * Specify the inspection mode as either `deep` or `shallow`.
    * Available values: "deep", "shallow".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}
    */
    readonly inspectionMode?: string;
}
export declare function zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable | undefined);
    private _inspectionMode?;
    get inspectionMode(): string;
    set inspectionMode(value: string);
    resetInspectionMode(): void;
    get inspectionModeInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsBrowserIsolation {
    /**
    * Specify whether to enable non-identity onramp support for Browser Isolation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#non_identity_enabled ZeroTrustGatewaySettings#non_identity_enabled}
    */
    readonly nonIdentityEnabled?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to enable Clientless Browser Isolation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}
    */
    readonly urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable | undefined);
    private _nonIdentityEnabled?;
    get nonIdentityEnabled(): boolean | cdktf.IResolvable;
    set nonIdentityEnabled(value: boolean | cdktf.IResolvable);
    resetNonIdentityEnabled(): void;
    get nonIdentityEnabledInput(): any;
    private _urlBrowserIsolationEnabled?;
    get urlBrowserIsolationEnabled(): boolean | cdktf.IResolvable;
    set urlBrowserIsolationEnabled(value: boolean | cdktf.IResolvable);
    resetUrlBrowserIsolationEnabled(): void;
    get urlBrowserIsolationEnabledInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsCertificate {
    /**
    * Specify the UUID of the certificate used for interception. Ensure the certificate is available at the edge(previously called 'active'). A nil UUID directs Cloudflare to use the Root CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct?: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsCustomCertificate {
    /**
    * Indicate the internal certificate status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#binding_status ZeroTrustGatewaySettings#binding_status}
    */
    readonly bindingStatus?: string;
    /**
    * Specify whether to enable a custom certificate authority for signing Gateway traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Specify the UUID of the certificate (ID from MTLS certificate store).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#updated_at ZeroTrustGatewaySettings#updated_at}
    */
    readonly updatedAt?: string;
}
export declare function zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct?: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable | undefined);
    private _bindingStatus?;
    get bindingStatus(): string;
    set bindingStatus(value: string);
    resetBindingStatus(): void;
    get bindingStatusInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _updatedAt?;
    get updatedAt(): string;
    set updatedAt(value: string);
    resetUpdatedAt(): void;
    get updatedAtInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsExtendedEmailMatching {
    /**
    * Specify whether to match all variants of user emails (with + or . modifiers) used as criteria in Firewall policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get readOnly(): any;
    get sourceAccount(): any;
    get version(): any;
}
export interface ZeroTrustGatewaySettingsSettingsFips {
    /**
    * Enforce cipher suites and TLS versions compliant with FIPS 140-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}
    */
    readonly tls?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsFipsToTerraform(struct?: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsFipsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable | undefined);
    private _tls?;
    get tls(): boolean | cdktf.IResolvable;
    set tls(value: boolean | cdktf.IResolvable);
    resetTls(): void;
    get tlsInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsHostSelector {
    /**
    * Specify whether to enable filtering via hosts for egress policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct?: ZeroTrustGatewaySettingsSettingsHostSelector | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsHostSelector | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsHostSelector | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsHostSelector | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsInspection {
    /**
    * Define the proxy inspection mode.   1. static: Gateway applies static inspection to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on TCP(443) and UDP(443).   2. dynamic: Gateway applies protocol detection to inspect HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect HTTPS traffic.
    * Available values: "static", "dynamic".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#mode ZeroTrustGatewaySettings#mode}
    */
    readonly mode?: string;
}
export declare function zeroTrustGatewaySettingsSettingsInspectionToTerraform(struct?: ZeroTrustGatewaySettingsSettingsInspection | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsInspection | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsInspectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsInspection | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsInspection | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsProtocolDetection {
    /**
    * Specify whether to detect protocols from the initial bytes of client traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct?: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewaySettingsSettingsSandbox {
    /**
    * Specify whether to enable the sandbox.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the action to take when the system cannot scan the file.
    * Available values: "allow", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#fallback_action ZeroTrustGatewaySettings#fallback_action}
    */
    readonly fallbackAction?: string;
}
export declare function zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct?: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsSandboxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _fallbackAction?;
    get fallbackAction(): string;
    set fallbackAction(value: string);
    resetFallbackAction(): void;
    get fallbackActionInput(): string;
}
export interface ZeroTrustGatewaySettingsSettingsTlsDecrypt {
    /**
    * Specify whether to inspect encrypted HTTP traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct?: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewaySettingsSettings {
    /**
    * Specify activity log settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#activity_log ZeroTrustGatewaySettings#activity_log}
    */
    readonly activityLog?: ZeroTrustGatewaySettingsSettingsActivityLog;
    /**
    * Specify anti-virus settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}
    */
    readonly antivirus?: ZeroTrustGatewaySettingsSettingsAntivirus;
    /**
    * Specify block page layout settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}
    */
    readonly blockPage?: ZeroTrustGatewaySettingsSettingsBlockPage;
    /**
    * Specify the DLP inspection mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}
    */
    readonly bodyScanning?: ZeroTrustGatewaySettingsSettingsBodyScanning;
    /**
    * Specify Clientless Browser Isolation settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#browser_isolation ZeroTrustGatewaySettings#browser_isolation}
    */
    readonly browserIsolation?: ZeroTrustGatewaySettingsSettingsBrowserIsolation;
    /**
    * Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}
    */
    readonly certificate?: ZeroTrustGatewaySettingsSettingsCertificate;
    /**
    * Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}
    */
    readonly customCertificate?: ZeroTrustGatewaySettingsSettingsCustomCertificate;
    /**
    * Configures user email settings for firewall policies. When you enable this, the system standardizes email addresses in the identity portion of the rule to match extended email variants in firewall policies. When you disable this setting, the system matches email addresses exactly as you provide them. Enable this setting if your email uses `.` or `+` modifiers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}
    */
    readonly extendedEmailMatching?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching;
    /**
    * Specify FIPS settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}
    */
    readonly fips?: ZeroTrustGatewaySettingsSettingsFips;
    /**
    * Enable host selection in egress policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#host_selector ZeroTrustGatewaySettings#host_selector}
    */
    readonly hostSelector?: ZeroTrustGatewaySettingsSettingsHostSelector;
    /**
    * Define the proxy inspection mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#inspection ZeroTrustGatewaySettings#inspection}
    */
    readonly inspection?: ZeroTrustGatewaySettingsSettingsInspection;
    /**
    * Specify whether to detect protocols from the initial bytes of client traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#protocol_detection ZeroTrustGatewaySettings#protocol_detection}
    */
    readonly protocolDetection?: ZeroTrustGatewaySettingsSettingsProtocolDetection;
    /**
    * Specify whether to enable the sandbox.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#sandbox ZeroTrustGatewaySettings#sandbox}
    */
    readonly sandbox?: ZeroTrustGatewaySettingsSettingsSandbox;
    /**
    * Specify whether to inspect encrypted HTTP traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#tls_decrypt ZeroTrustGatewaySettings#tls_decrypt}
    */
    readonly tlsDecrypt?: ZeroTrustGatewaySettingsSettingsTlsDecrypt;
}
export declare function zeroTrustGatewaySettingsSettingsToTerraform(struct?: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable): any;
export declare function zeroTrustGatewaySettingsSettingsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable): any;
export declare class ZeroTrustGatewaySettingsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewaySettingsSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable | undefined);
    private _activityLog;
    get activityLog(): ZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
    putActivityLog(value: ZeroTrustGatewaySettingsSettingsActivityLog): void;
    resetActivityLog(): void;
    get activityLogInput(): any;
    private _antivirus;
    get antivirus(): ZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
    putAntivirus(value: ZeroTrustGatewaySettingsSettingsAntivirus): void;
    resetAntivirus(): void;
    get antivirusInput(): any;
    private _blockPage;
    get blockPage(): ZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
    putBlockPage(value: ZeroTrustGatewaySettingsSettingsBlockPage): void;
    resetBlockPage(): void;
    get blockPageInput(): any;
    private _bodyScanning;
    get bodyScanning(): ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
    putBodyScanning(value: ZeroTrustGatewaySettingsSettingsBodyScanning): void;
    resetBodyScanning(): void;
    get bodyScanningInput(): any;
    private _browserIsolation;
    get browserIsolation(): ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
    putBrowserIsolation(value: ZeroTrustGatewaySettingsSettingsBrowserIsolation): void;
    resetBrowserIsolation(): void;
    get browserIsolationInput(): any;
    private _certificate;
    get certificate(): ZeroTrustGatewaySettingsSettingsCertificateOutputReference;
    putCertificate(value: ZeroTrustGatewaySettingsSettingsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): any;
    private _customCertificate;
    get customCertificate(): ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
    putCustomCertificate(value: ZeroTrustGatewaySettingsSettingsCustomCertificate): void;
    resetCustomCertificate(): void;
    get customCertificateInput(): any;
    private _extendedEmailMatching;
    get extendedEmailMatching(): ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
    putExtendedEmailMatching(value: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching): void;
    resetExtendedEmailMatching(): void;
    get extendedEmailMatchingInput(): any;
    private _fips;
    get fips(): ZeroTrustGatewaySettingsSettingsFipsOutputReference;
    putFips(value: ZeroTrustGatewaySettingsSettingsFips): void;
    resetFips(): void;
    get fipsInput(): any;
    private _hostSelector;
    get hostSelector(): ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
    putHostSelector(value: ZeroTrustGatewaySettingsSettingsHostSelector): void;
    resetHostSelector(): void;
    get hostSelectorInput(): any;
    private _inspection;
    get inspection(): ZeroTrustGatewaySettingsSettingsInspectionOutputReference;
    putInspection(value: ZeroTrustGatewaySettingsSettingsInspection): void;
    resetInspection(): void;
    get inspectionInput(): any;
    private _protocolDetection;
    get protocolDetection(): ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
    putProtocolDetection(value: ZeroTrustGatewaySettingsSettingsProtocolDetection): void;
    resetProtocolDetection(): void;
    get protocolDetectionInput(): any;
    private _sandbox;
    get sandbox(): ZeroTrustGatewaySettingsSettingsSandboxOutputReference;
    putSandbox(value: ZeroTrustGatewaySettingsSettingsSandbox): void;
    resetSandbox(): void;
    get sandboxInput(): any;
    private _tlsDecrypt;
    get tlsDecrypt(): ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
    putTlsDecrypt(value: ZeroTrustGatewaySettingsSettingsTlsDecrypt): void;
    resetTlsDecrypt(): void;
    get tlsDecryptInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
export declare class ZeroTrustGatewaySettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_settings";
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewaySettings to import
    * @param importFromId The id of the existing ZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewaySettingsConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustGatewaySettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get createdAt(): any;
    get id(): any;
    private _settings;
    get settings(): ZeroTrustGatewaySettingsSettingsOutputReference;
    putSettings(value: ZeroTrustGatewaySettingsSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
