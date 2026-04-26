import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`.
    * Available values: "on", "off", "allow", "block", "scan", "noscan", "safesearch", "ytrestricted", "isolate", "noisolate", "override", "l4_override", "egress", "resolve", "quarantine", "redirect".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
    */
    readonly action: string;
    /**
    * Specify the rule description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}
    */
    readonly description?: string;
    /**
    * Specify the wirefilter expression used for device posture check. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}
    */
    readonly devicePosture?: string;
    /**
    * Specify whether the rule is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Defines the expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any. This  does not apply to HTTP or network policies. Settable only for `dns` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#expiration ZeroTrustGatewayPolicy#expiration}
    */
    readonly expiration?: ZeroTrustGatewayPolicyExpiration;
    /**
    * Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. Can only contain a single value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}
    */
    readonly filters?: string[];
    /**
    * Specify the wirefilter expression used for identity matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}
    */
    readonly identity?: string;
    /**
    * Specify the rule name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}
    */
    readonly name: string;
    /**
    * Set the order of your rules. Lower values indicate higher precedence. At each processing phase, evaluate applicable rules in ascending order of this value. Refer to [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform) to manage precedence via Terraform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}
    */
    readonly precedence?: number;
    /**
    * Defines settings for this rule. Settings apply only to specific rule types and must use compatible selectors. If Terraform detects drift, confirm the setting supports your rule type and check whether the API modifies the value. Use API-returned values in your configuration to prevent drift.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}
    */
    readonly ruleSettings?: ZeroTrustGatewayPolicyRuleSettings;
    /**
    * Defines the schedule for activating DNS policies. Settable only for `dns` and `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#schedule ZeroTrustGatewayPolicy#schedule}
    */
    readonly schedule?: ZeroTrustGatewayPolicySchedule;
    /**
    * Specify the wirefilter expression used for traffic matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}
    */
    readonly traffic?: string;
}
export interface ZeroTrustGatewayPolicyExpiration {
    /**
    * Defines the default duration a policy active in minutes. Must set in order to use the `reset_expiration` endpoint on this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}
    */
    readonly duration?: number;
    /**
    * Show the timestamp when the policy expires and stops applying.  The value must follow RFC 3339 and include a UTC offset.  The system accepts non-zero offsets but converts them to the equivalent UTC+00:00  value and returns timestamps with a trailing Z. Expiration policies ignore client  timezones and expire globally at the specified expires_at time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#expires_at ZeroTrustGatewayPolicy#expires_at}
    */
    readonly expiresAt: string;
}
export declare function zeroTrustGatewayPolicyExpirationToTerraform(struct?: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyExpirationToHclTerraform(struct?: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyExpiration | cdktf.IResolvable | undefined);
    private _duration?;
    get duration(): number;
    set duration(value: number);
    resetDuration(): void;
    get durationInput(): number;
    get expired(): any;
    private _expiresAt?;
    get expiresAt(): string;
    set expiresAt(value: string);
    get expiresAtInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsAuditSsh {
    /**
    * Enable SSH command logging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}
    */
    readonly commandLogging?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | cdktf.IResolvable | undefined);
    private _commandLogging?;
    get commandLogging(): boolean | cdktf.IResolvable;
    set commandLogging(value: boolean | cdktf.IResolvable);
    resetCommandLogging(): void;
    get commandLoggingInput(): any;
}
export interface ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls {
    /**
    * Configure copy behavior. If set to remote_only, users cannot copy isolated content from the remote browser to the local clipboard. If this field is absent, copying remains enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled", "remote_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#copy ZeroTrustGatewayPolicy#copy}
    */
    readonly copy?: string;
    /**
    * Set to false to enable copy-pasting. Only applies when `version == "v1"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#dcp ZeroTrustGatewayPolicy#dcp}
    */
    readonly dcp?: boolean | cdktf.IResolvable;
    /**
    * Set to false to enable downloading. Only applies when `version == "v1"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#dd ZeroTrustGatewayPolicy#dd}
    */
    readonly dd?: boolean | cdktf.IResolvable;
    /**
    * Set to false to enable keyboard usage. Only applies when `version == "v1"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#dk ZeroTrustGatewayPolicy#dk}
    */
    readonly dk?: boolean | cdktf.IResolvable;
    /**
    * Configure download behavior. When set to remote_only, users can view downloads but cannot save them. If this field is absent, downloading remains enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled", "remote_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#download ZeroTrustGatewayPolicy#download}
    */
    readonly download?: string;
    /**
    * Set to false to enable printing. Only applies when `version == "v1"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#dp ZeroTrustGatewayPolicy#dp}
    */
    readonly dp?: boolean | cdktf.IResolvable;
    /**
    * Set to false to enable uploading. Only applies when `version == "v1"`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#du ZeroTrustGatewayPolicy#du}
    */
    readonly du?: boolean | cdktf.IResolvable;
    /**
    * Configure keyboard usage behavior. If this field is absent, keyboard usage remains enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#keyboard ZeroTrustGatewayPolicy#keyboard}
    */
    readonly keyboard?: string;
    /**
    * Configure paste behavior. If set to remote_only, users cannot paste content from the local clipboard into isolated pages. If this field is absent, pasting remains enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled", "remote_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#paste ZeroTrustGatewayPolicy#paste}
    */
    readonly paste?: string;
    /**
    * Configure print behavior. Default, Printing is enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#printing ZeroTrustGatewayPolicy#printing}
    */
    readonly printing?: string;
    /**
    * Configure upload behavior. If this field is absent, uploading remains enabled. Applies only when version == "v2".
    * Available values: "enabled", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#upload ZeroTrustGatewayPolicy#upload}
    */
    readonly upload?: string;
    /**
    * Indicate which version of the browser isolation controls should apply.
    * Available values: "v1", "v2".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#version ZeroTrustGatewayPolicy#version}
    */
    readonly version?: string;
    /**
    * Specify the watermark ID (UUID) to apply to the isolated browser session. When present, enables watermark rendering in the isolated browser.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#wm_id ZeroTrustGatewayPolicy#wm_id}
    */
    readonly wmId?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | cdktf.IResolvable | undefined);
    private _copy?;
    get copy(): string;
    set copy(value: string);
    resetCopy(): void;
    get copyInput(): string;
    private _dcp?;
    get dcp(): boolean | cdktf.IResolvable;
    set dcp(value: boolean | cdktf.IResolvable);
    resetDcp(): void;
    get dcpInput(): any;
    private _dd?;
    get dd(): boolean | cdktf.IResolvable;
    set dd(value: boolean | cdktf.IResolvable);
    resetDd(): void;
    get ddInput(): any;
    private _dk?;
    get dk(): boolean | cdktf.IResolvable;
    set dk(value: boolean | cdktf.IResolvable);
    resetDk(): void;
    get dkInput(): any;
    private _download?;
    get download(): string;
    set download(value: string);
    resetDownload(): void;
    get downloadInput(): string;
    private _dp?;
    get dp(): boolean | cdktf.IResolvable;
    set dp(value: boolean | cdktf.IResolvable);
    resetDp(): void;
    get dpInput(): any;
    private _du?;
    get du(): boolean | cdktf.IResolvable;
    set du(value: boolean | cdktf.IResolvable);
    resetDu(): void;
    get duInput(): any;
    private _keyboard?;
    get keyboard(): string;
    set keyboard(value: string);
    resetKeyboard(): void;
    get keyboardInput(): string;
    private _paste?;
    get paste(): string;
    set paste(value: string);
    resetPaste(): void;
    get pasteInput(): string;
    private _printing?;
    get printing(): string;
    set printing(value: string);
    resetPrinting(): void;
    get printingInput(): string;
    private _upload?;
    get upload(): string;
    set upload(value: string);
    resetUpload(): void;
    get uploadInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _wmId?;
    get wmId(): string;
    set wmId(value: string);
    resetWmId(): void;
    get wmIdInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsBlockPage {
    /**
    * Specify whether to pass the context information as query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
    */
    readonly includeContext?: boolean | cdktf.IResolvable;
    /**
    * Specify the URI to which the user is redirected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}
    */
    readonly targetUri: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsBlockPage | cdktf.IResolvable | undefined);
    private _includeContext?;
    get includeContext(): boolean | cdktf.IResolvable;
    set includeContext(value: boolean | cdktf.IResolvable);
    resetIncludeContext(): void;
    get includeContextInput(): any;
    private _targetUri?;
    get targetUri(): string;
    set targetUri(value: string);
    get targetUriInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsCheckSession {
    /**
    * Sets the required session freshness threshold. The API returns a normalized version of this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}
    */
    readonly duration?: string;
    /**
    * Enable session enforcement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession | cdktf.IResolvable | undefined);
    private _duration?;
    get duration(): string;
    set duration(value: string);
    resetDuration(): void;
    get durationInput(): string;
    private _enforce?;
    get enforce(): boolean | cdktf.IResolvable;
    set enforce(value: boolean | cdktf.IResolvable);
    resetEnforce(): void;
    get enforceInput(): any;
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 {
    /**
    * Specify the IPv4 address of the upstream resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
    */
    readonly ip: string;
    /**
    * Specify a port number to use for the upstream resolver. Defaults to 53 if unspecified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
    */
    readonly port?: number;
    /**
    * Indicate whether to connect to this resolver over a private network. Must set when vnet_id set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
    */
    readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
    /**
    * Specify an optional virtual network for this resolver. Uses default virtual network id if omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
    */
    readonly vnetId?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _routeThroughPrivateNetwork?;
    get routeThroughPrivateNetwork(): boolean | cdktf.IResolvable;
    set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable);
    resetRouteThroughPrivateNetwork(): void;
    get routeThroughPrivateNetworkInput(): any;
    private _vnetId?;
    get vnetId(): string;
    set vnetId(value: string);
    resetVnetId(): void;
    get vnetIdInput(): string;
}
export declare class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 {
    /**
    * Specify the IPv6 address of the upstream resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
    */
    readonly ip: string;
    /**
    * Specify a port number to use for the upstream resolver. Defaults to 53 if unspecified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
    */
    readonly port?: number;
    /**
    * Indicate whether to connect to this resolver over a private network. Must set when vnet_id set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
    */
    readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
    /**
    * Specify an optional virtual network for this resolver. Uses default virtual network id if omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
    */
    readonly vnetId?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _routeThroughPrivateNetwork?;
    get routeThroughPrivateNetwork(): boolean | cdktf.IResolvable;
    set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable);
    resetRouteThroughPrivateNetwork(): void;
    get routeThroughPrivateNetworkInput(): any;
    private _vnetId?;
    get vnetId(): string;
    set vnetId(value: string);
    resetVnetId(): void;
    get vnetIdInput(): string;
}
export declare class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolvers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
    */
    readonly ipv4?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
    */
    readonly ipv6?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable;
}
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | cdktf.IResolvable | undefined);
    private _ipv4;
    get ipv4(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
    putIpv4(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable): void;
    resetIpv4(): void;
    get ipv4Input(): any;
    private _ipv6;
    get ipv6(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
    putIpv6(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable): void;
    resetIpv6(): void;
    get ipv6Input(): any;
}
export interface ZeroTrustGatewayPolicyRuleSettingsEgress {
    /**
    * Specify the IPv4 address to use for egress.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
    */
    readonly ipv4?: string;
    /**
    * Specify the fallback IPv4 address to use for egress when the primary IPv4 fails. Set '0.0.0.0' to indicate local egress via WARP IPs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}
    */
    readonly ipv4Fallback?: string;
    /**
    * Specify the IPv6 range to use for egress.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
    */
    readonly ipv6?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsEgress | cdktf.IResolvable | undefined);
    private _ipv4?;
    get ipv4(): string;
    set ipv4(value: string);
    resetIpv4(): void;
    get ipv4Input(): string;
    private _ipv4Fallback?;
    get ipv4Fallback(): string;
    set ipv4Fallback(value: string);
    resetIpv4Fallback(): void;
    get ipv4FallbackInput(): string;
    private _ipv6?;
    get ipv6(): string;
    set ipv6(value: string);
    resetIpv6(): void;
    get ipv6Input(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsForensicCopy {
    /**
    * Enable sending the copy to storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsForensicCopy | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsForensicCopy | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsForensicCopy | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsForensicCopy | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewayPolicyRuleSettingsL4Override {
    /**
    * Defines the IPv4 or IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
    */
    readonly ip?: string;
    /**
    * Defines a port number to use for TCP/UDP overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
    */
    readonly port?: number;
}
export declare function zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsL4Override | cdktf.IResolvable | undefined);
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
}
export interface ZeroTrustGatewayPolicyRuleSettingsNotificationSettings {
    /**
    * Enable notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Indicates whether to pass the context information as query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
    */
    readonly includeContext?: boolean | cdktf.IResolvable;
    /**
    * Customize the message shown in the notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#msg ZeroTrustGatewayPolicy#msg}
    */
    readonly msg?: string;
    /**
    * Defines an optional URL to direct users to additional information. If unset, the notification opens a block page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}
    */
    readonly supportUrl?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | cdktf.IResolvable | undefined);
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
export interface ZeroTrustGatewayPolicyRuleSettingsPayloadLog {
    /**
    * Enable DLP payload logging for this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
}
export interface ZeroTrustGatewayPolicyRuleSettingsQuarantine {
    /**
    * Specify the types of files to sandbox.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#file_types ZeroTrustGatewayPolicy#file_types}
    */
    readonly fileTypes?: string[];
}
export declare function zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsQuarantine | cdktf.IResolvable | undefined);
    private _fileTypes?;
    get fileTypes(): string[];
    set fileTypes(value: string[]);
    resetFileTypes(): void;
    get fileTypesInput(): string[];
}
export interface ZeroTrustGatewayPolicyRuleSettingsRedirect {
    /**
    * Specify whether to pass the context information as query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}
    */
    readonly includeContext?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to append the path and query parameters from the original request to target_uri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#preserve_path_and_query ZeroTrustGatewayPolicy#preserve_path_and_query}
    */
    readonly preservePathAndQuery?: boolean | cdktf.IResolvable;
    /**
    * Specify the URI to which the user is redirected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}
    */
    readonly targetUri: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsRedirect | cdktf.IResolvable | undefined);
    private _includeContext?;
    get includeContext(): boolean | cdktf.IResolvable;
    set includeContext(value: boolean | cdktf.IResolvable);
    resetIncludeContext(): void;
    get includeContextInput(): any;
    private _preservePathAndQuery?;
    get preservePathAndQuery(): boolean | cdktf.IResolvable;
    set preservePathAndQuery(value: boolean | cdktf.IResolvable);
    resetPreservePathAndQuery(): void;
    get preservePathAndQueryInput(): any;
    private _targetUri?;
    get targetUri(): string;
    set targetUri(value: string);
    get targetUriInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally {
    /**
    * Specify the fallback behavior to apply when the internal DNS response code differs from 'NOERROR' or when the response data contains only CNAME records for 'A' or 'AAAA' queries.
    * Available values: "none", "public_dns".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#fallback ZeroTrustGatewayPolicy#fallback}
    */
    readonly fallback?: string;
    /**
    * Specify the internal DNS view identifier to pass to the internal DNS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#view_id ZeroTrustGatewayPolicy#view_id}
    */
    readonly viewId?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | cdktf.IResolvable | undefined);
    private _fallback?;
    get fallback(): string;
    set fallback(value: string);
    resetFallback(): void;
    get fallbackInput(): string;
    private _viewId?;
    get viewId(): string;
    set viewId(value: string);
    resetViewId(): void;
    get viewIdInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettingsUntrustedCert {
    /**
    * Defines the action performed when an untrusted certificate seen. The default action an error with HTTP code 526.
    * Available values: "pass_through", "block", "error".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
    */
    readonly action?: string;
}
export declare function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
}
export interface ZeroTrustGatewayPolicyRuleSettings {
    /**
    * Add custom headers to allowed requests as key-value pairs. Use header names as keys that map to arrays of header values. Settable only for `http` rules with the action set to `allow`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}
    */
    readonly addHeaders?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Set to enable MSP children to bypass this rule. Only parent MSP accounts can set this. this rule. Settable for all types of rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}
    */
    readonly allowChildBypass?: boolean | cdktf.IResolvable;
    /**
    * Define the settings for the Audit SSH action. Settable only for `l4` rules with `audit_ssh` action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}
    */
    readonly auditSsh?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh;
    /**
    * Configure browser isolation behavior. Settable only for `http` rules with the action set to `isolate`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}
    */
    readonly bisoAdminControls?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls;
    /**
    * Configure custom block page settings. If missing or null, use the account settings. Settable only for `http` rules with the action set to `block`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#block_page ZeroTrustGatewayPolicy#block_page}
    */
    readonly blockPage?: ZeroTrustGatewayPolicyRuleSettingsBlockPage;
    /**
    * Enable the custom block page. Settable only for `dns` rules with action `block`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}
    */
    readonly blockPageEnabled?: boolean | cdktf.IResolvable;
    /**
    * Explain why the rule blocks the request. The custom block page shows this text (if enabled). Settable only for `dns`, `l4`, and `http` rules when the action set to `block`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#block_reason ZeroTrustGatewayPolicy#block_reason}
    */
    readonly blockReason?: string;
    /**
    * Set to enable MSP accounts to bypass their parent's rules. Only MSP child accounts can set this. Settable for all types of rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}
    */
    readonly bypassParentRule?: boolean | cdktf.IResolvable;
    /**
    * Configure session check behavior. Settable only for `l4` and `http` rules with the action set to `allow`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}
    */
    readonly checkSession?: ZeroTrustGatewayPolicyRuleSettingsCheckSession;
    /**
    * Configure custom resolvers to route queries that match the resolver policy. Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally' settings. DNS queries get routed to the address closest to their origin. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}
    */
    readonly dnsResolvers?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers;
    /**
    * Configure how Gateway Proxy traffic egresses. You can enable this setting for rules with Egress actions and filters, or omit it to indicate local egress via WARP IPs. Settable only for `egress` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}
    */
    readonly egress?: ZeroTrustGatewayPolicyRuleSettingsEgress;
    /**
    * Configure whether a copy of the HTTP request will be sent to storage when the rule matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#forensic_copy ZeroTrustGatewayPolicy#forensic_copy}
    */
    readonly forensicCopy?: ZeroTrustGatewayPolicyRuleSettingsForensicCopy;
    /**
    * Ignore category matches at CNAME domains in a response. When off, evaluate categories in this rule against all CNAME domain categories in the response. Settable only for `dns` and `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}
    */
    readonly ignoreCnameCategoryMatches?: boolean | cdktf.IResolvable;
    /**
    * Specify whether to disable DNSSEC validation (for Allow actions) [INSECURE]. Settable only for `dns` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}
    */
    readonly insecureDisableDnssecValidation?: boolean | cdktf.IResolvable;
    /**
    * Enable IPs in DNS resolver category blocks. The system blocks only domain name categories unless you enable this setting. Settable only for `dns` and `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}
    */
    readonly ipCategories?: boolean | cdktf.IResolvable;
    /**
    * Indicates whether to include IPs in DNS resolver indicator feed blocks. Default, indicator feeds block only domain names. Settable only for `dns` and `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#ip_indicator_feeds ZeroTrustGatewayPolicy#ip_indicator_feeds}
    */
    readonly ipIndicatorFeeds?: boolean | cdktf.IResolvable;
    /**
    * Send matching traffic to the supplied destination IP address and port. Settable only for `l4` rules with the action set to `l4_override`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}
    */
    readonly l4Override?: ZeroTrustGatewayPolicyRuleSettingsL4Override;
    /**
    * Configure a notification to display on the user's device when this rule matched. Settable for all types of rules with the action set to `block`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}
    */
    readonly notificationSettings?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings;
    /**
    * Defines a hostname for override, for the matching DNS queries. Settable only for `dns` rules with the action set to `override`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}
    */
    readonly overrideHost?: string;
    /**
    * Defines a an IP or set of IPs for overriding matched DNS queries. Settable only for `dns` rules with the action set to `override`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}
    */
    readonly overrideIps?: string[];
    /**
    * Configure DLP payload logging. Settable only for `http` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}
    */
    readonly payloadLog?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog;
    /**
    * Configure settings that apply to quarantine rules. Settable only for `http` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#quarantine ZeroTrustGatewayPolicy#quarantine}
    */
    readonly quarantine?: ZeroTrustGatewayPolicyRuleSettingsQuarantine;
    /**
    * Apply settings to redirect rules. Settable only for `http` rules with the action set to `redirect`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#redirect ZeroTrustGatewayPolicy#redirect}
    */
    readonly redirect?: ZeroTrustGatewayPolicyRuleSettingsRedirect;
    /**
    * Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input. Not used when 'dns_resolvers' is specified or 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#resolve_dns_internally ZeroTrustGatewayPolicy#resolve_dns_internally}
    */
    readonly resolveDnsInternally?: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally;
    /**
    * Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot set when 'dns_resolvers' specified or 'resolve_dns_internally' is set. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}
    */
    readonly resolveDnsThroughCloudflare?: boolean | cdktf.IResolvable;
    /**
    * Configure behavior when an upstream certificate is invalid or an SSL error occurs. Settable only for `http` rules with the action set to `allow`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}
    */
    readonly untrustedCert?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert;
}
export declare function zeroTrustGatewayPolicyRuleSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicyRuleSettings | cdktf.IResolvable | undefined);
    private _addHeaders?;
    get addHeaders(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set addHeaders(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetAddHeaders(): void;
    get addHeadersInput(): any;
    private _allowChildBypass?;
    get allowChildBypass(): boolean | cdktf.IResolvable;
    set allowChildBypass(value: boolean | cdktf.IResolvable);
    resetAllowChildBypass(): void;
    get allowChildBypassInput(): any;
    private _auditSsh;
    get auditSsh(): ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
    putAuditSsh(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh): void;
    resetAuditSsh(): void;
    get auditSshInput(): any;
    private _bisoAdminControls;
    get bisoAdminControls(): ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
    putBisoAdminControls(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): void;
    resetBisoAdminControls(): void;
    get bisoAdminControlsInput(): any;
    private _blockPage;
    get blockPage(): ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
    putBlockPage(value: ZeroTrustGatewayPolicyRuleSettingsBlockPage): void;
    resetBlockPage(): void;
    get blockPageInput(): any;
    private _blockPageEnabled?;
    get blockPageEnabled(): boolean | cdktf.IResolvable;
    set blockPageEnabled(value: boolean | cdktf.IResolvable);
    resetBlockPageEnabled(): void;
    get blockPageEnabledInput(): any;
    private _blockReason?;
    get blockReason(): string;
    set blockReason(value: string);
    resetBlockReason(): void;
    get blockReasonInput(): string;
    private _bypassParentRule?;
    get bypassParentRule(): boolean | cdktf.IResolvable;
    set bypassParentRule(value: boolean | cdktf.IResolvable);
    resetBypassParentRule(): void;
    get bypassParentRuleInput(): any;
    private _checkSession;
    get checkSession(): ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
    putCheckSession(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession): void;
    resetCheckSession(): void;
    get checkSessionInput(): any;
    private _dnsResolvers;
    get dnsResolvers(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
    putDnsResolvers(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers): void;
    resetDnsResolvers(): void;
    get dnsResolversInput(): any;
    private _egress;
    get egress(): ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
    putEgress(value: ZeroTrustGatewayPolicyRuleSettingsEgress): void;
    resetEgress(): void;
    get egressInput(): any;
    private _forensicCopy;
    get forensicCopy(): ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
    putForensicCopy(value: ZeroTrustGatewayPolicyRuleSettingsForensicCopy): void;
    resetForensicCopy(): void;
    get forensicCopyInput(): any;
    private _ignoreCnameCategoryMatches?;
    get ignoreCnameCategoryMatches(): boolean | cdktf.IResolvable;
    set ignoreCnameCategoryMatches(value: boolean | cdktf.IResolvable);
    resetIgnoreCnameCategoryMatches(): void;
    get ignoreCnameCategoryMatchesInput(): any;
    private _insecureDisableDnssecValidation?;
    get insecureDisableDnssecValidation(): boolean | cdktf.IResolvable;
    set insecureDisableDnssecValidation(value: boolean | cdktf.IResolvable);
    resetInsecureDisableDnssecValidation(): void;
    get insecureDisableDnssecValidationInput(): any;
    private _ipCategories?;
    get ipCategories(): boolean | cdktf.IResolvable;
    set ipCategories(value: boolean | cdktf.IResolvable);
    resetIpCategories(): void;
    get ipCategoriesInput(): any;
    private _ipIndicatorFeeds?;
    get ipIndicatorFeeds(): boolean | cdktf.IResolvable;
    set ipIndicatorFeeds(value: boolean | cdktf.IResolvable);
    resetIpIndicatorFeeds(): void;
    get ipIndicatorFeedsInput(): any;
    private _l4Override;
    get l4Override(): ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
    putL4Override(value: ZeroTrustGatewayPolicyRuleSettingsL4Override): void;
    resetL4Override(): void;
    get l4OverrideInput(): any;
    private _notificationSettings;
    get notificationSettings(): ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
    putNotificationSettings(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings): void;
    resetNotificationSettings(): void;
    get notificationSettingsInput(): any;
    private _overrideHost?;
    get overrideHost(): string;
    set overrideHost(value: string);
    resetOverrideHost(): void;
    get overrideHostInput(): string;
    private _overrideIps?;
    get overrideIps(): string[];
    set overrideIps(value: string[]);
    resetOverrideIps(): void;
    get overrideIpsInput(): string[];
    private _payloadLog;
    get payloadLog(): ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
    putPayloadLog(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog): void;
    resetPayloadLog(): void;
    get payloadLogInput(): any;
    private _quarantine;
    get quarantine(): ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
    putQuarantine(value: ZeroTrustGatewayPolicyRuleSettingsQuarantine): void;
    resetQuarantine(): void;
    get quarantineInput(): any;
    private _redirect;
    get redirect(): ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
    putRedirect(value: ZeroTrustGatewayPolicyRuleSettingsRedirect): void;
    resetRedirect(): void;
    get redirectInput(): any;
    private _resolveDnsInternally;
    get resolveDnsInternally(): ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
    putResolveDnsInternally(value: ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally): void;
    resetResolveDnsInternally(): void;
    get resolveDnsInternallyInput(): any;
    private _resolveDnsThroughCloudflare?;
    get resolveDnsThroughCloudflare(): boolean | cdktf.IResolvable;
    set resolveDnsThroughCloudflare(value: boolean | cdktf.IResolvable);
    resetResolveDnsThroughCloudflare(): void;
    get resolveDnsThroughCloudflareInput(): any;
    private _untrustedCert;
    get untrustedCert(): ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
    putUntrustedCert(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert): void;
    resetUntrustedCert(): void;
    get untrustedCertInput(): any;
}
export interface ZeroTrustGatewayPolicySchedule {
    /**
    * Specify the time intervals when the rule is active on Fridays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Fridays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#fri ZeroTrustGatewayPolicy#fri}
    */
    readonly fri?: string;
    /**
    * Specify the time intervals when the rule is active on Mondays, in the increasing order from 00:00-24:00(capped at maximum of 6 time splits). If this parameter omitted, the rule is deactivated on Mondays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#mon ZeroTrustGatewayPolicy#mon}
    */
    readonly mon?: string;
    /**
    * Specify the time intervals when the rule is active on Saturdays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Saturdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#sat ZeroTrustGatewayPolicy#sat}
    */
    readonly sat?: string;
    /**
    * Specify the time intervals when the rule is active on Sundays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Sundays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#sun ZeroTrustGatewayPolicy#sun}
    */
    readonly sun?: string;
    /**
    * Specify the time intervals when the rule is active on Thursdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Thursdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#thu ZeroTrustGatewayPolicy#thu}
    */
    readonly thu?: string;
    /**
    * Specify the time zone for rule evaluation. When a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway always uses the current time for that time zone. When this parameter is omitted, Gateway uses the time zone determined from the user's IP address. Colo time zone is used when the user's IP address does not resolve to a location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#time_zone ZeroTrustGatewayPolicy#time_zone}
    */
    readonly timeZone?: string;
    /**
    * Specify the time intervals when the rule is active on Tuesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Tuesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#tue ZeroTrustGatewayPolicy#tue}
    */
    readonly tue?: string;
    /**
    * Specify the time intervals when the rule is active on Wednesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Wednesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#wed ZeroTrustGatewayPolicy#wed}
    */
    readonly wed?: string;
}
export declare function zeroTrustGatewayPolicyScheduleToTerraform(struct?: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable): any;
export declare function zeroTrustGatewayPolicyScheduleToHclTerraform(struct?: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable): any;
export declare class ZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustGatewayPolicySchedule | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustGatewayPolicySchedule | cdktf.IResolvable | undefined);
    private _fri?;
    get fri(): string;
    set fri(value: string);
    resetFri(): void;
    get friInput(): string;
    private _mon?;
    get mon(): string;
    set mon(value: string);
    resetMon(): void;
    get monInput(): string;
    private _sat?;
    get sat(): string;
    set sat(value: string);
    resetSat(): void;
    get satInput(): string;
    private _sun?;
    get sun(): string;
    set sun(value: string);
    resetSun(): void;
    get sunInput(): string;
    private _thu?;
    get thu(): string;
    set thu(value: string);
    resetThu(): void;
    get thuInput(): string;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    resetTimeZone(): void;
    get timeZoneInput(): string;
    private _tue?;
    get tue(): string;
    set tue(value: string);
    resetTue(): void;
    get tueInput(): string;
    private _wed?;
    get wed(): string;
    set wed(value: string);
    resetWed(): void;
    get wedInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export declare class ZeroTrustGatewayPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_policy";
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing ZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustGatewayPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get createdAt(): any;
    get deletedAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _devicePosture?;
    get devicePosture(): string;
    set devicePosture(value: string);
    resetDevicePosture(): void;
    get devicePostureInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _expiration;
    get expiration(): ZeroTrustGatewayPolicyExpirationOutputReference;
    putExpiration(value: ZeroTrustGatewayPolicyExpiration): void;
    resetExpiration(): void;
    get expirationInput(): any;
    private _filters?;
    get filters(): string[];
    set filters(value: string[]);
    resetFilters(): void;
    get filtersInput(): string[];
    get id(): any;
    private _identity?;
    get identity(): string;
    set identity(value: string);
    resetIdentity(): void;
    get identityInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _precedence?;
    get precedence(): number;
    set precedence(value: number);
    resetPrecedence(): void;
    get precedenceInput(): number;
    get readOnly(): any;
    private _ruleSettings;
    get ruleSettings(): ZeroTrustGatewayPolicyRuleSettingsOutputReference;
    putRuleSettings(value: ZeroTrustGatewayPolicyRuleSettings): void;
    resetRuleSettings(): void;
    get ruleSettingsInput(): any;
    private _schedule;
    get schedule(): ZeroTrustGatewayPolicyScheduleOutputReference;
    putSchedule(value: ZeroTrustGatewayPolicySchedule): void;
    resetSchedule(): void;
    get scheduleInput(): any;
    get sharable(): any;
    get sourceAccount(): any;
    private _traffic?;
    get traffic(): string;
    set traffic(value: string);
    resetTraffic(): void;
    get trafficInput(): string;
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
