import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDevicePostureRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}
    */
    readonly accountId?: string;
    /**
    * The description of the device posture rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}
    */
    readonly description?: string;
    /**
    * Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#expiration ZeroTrustDevicePostureRule#expiration}
    */
    readonly expiration?: string;
    /**
    * The value to be checked against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#input ZeroTrustDevicePostureRule#input}
    */
    readonly input?: ZeroTrustDevicePostureRuleInput;
    /**
    * The conditions that the client must match to run the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#match ZeroTrustDevicePostureRule#match}
    */
    readonly match?: ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable;
    /**
    * The name of the device posture rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#name ZeroTrustDevicePostureRule#name}
    */
    readonly name?: string;
    /**
    * Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#schedule ZeroTrustDevicePostureRule#schedule}
    */
    readonly schedule?: string;
    /**
    * The type of device posture rule.
    * Available values: "file", "application", "tanium", "gateway", "warp", "disk_encryption", "serial_number", "sentinelone", "carbonblack", "firewall", "os_version", "domain_joined", "client_certificate", "client_certificate_v2", "antivirus", "unique_client_id", "kolide", "tanium_s2s", "crowdstrike_s2s", "intune", "workspace_one", "sentinelone_s2s", "custom_s2s".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#type ZeroTrustDevicePostureRule#type}
    */
    readonly type: string;
}
export interface ZeroTrustDevicePostureRuleInputLocations {
    /**
    * List of paths to check for client certificate on linux.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#paths ZeroTrustDevicePostureRule#paths}
    */
    readonly paths?: string[];
    /**
    * List of trust stores to check for client certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#trust_stores ZeroTrustDevicePostureRule#trust_stores}
    */
    readonly trustStores?: string[];
}
export declare function zeroTrustDevicePostureRuleInputLocationsToTerraform(struct?: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable): any;
export declare function zeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct?: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable): any;
export declare class ZeroTrustDevicePostureRuleInputLocationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDevicePostureRuleInputLocations | cdktf.IResolvable | undefined);
    private _paths?;
    get paths(): string[];
    set paths(value: string[]);
    resetPaths(): void;
    get pathsInput(): string[];
    private _trustStores?;
    get trustStores(): string[];
    set trustStores(value: string[]);
    resetTrustStores(): void;
    get trustStoresInput(): string[];
}
export interface ZeroTrustDevicePostureRuleInput {
    /**
    * The Number of active threats.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#active_threats ZeroTrustDevicePostureRule#active_threats}
    */
    readonly activeThreats?: number;
    /**
    * The set of Kolide device authentication states that pass the posture check. Device must match one of the specified states.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#auth_state ZeroTrustDevicePostureRule#auth_state}
    */
    readonly authState?: string[];
    /**
    * UUID of Cloudflare managed certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#certificate_id ZeroTrustDevicePostureRule#certificate_id}
    */
    readonly certificateId?: string;
    /**
    * List of volume names to be checked for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#check_disks ZeroTrustDevicePostureRule#check_disks}
    */
    readonly checkDisks?: string[];
    /**
    * Confirm the certificate was not imported from another device. We recommend keeping this enabled unless the certificate was deployed without a private key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#check_private_key ZeroTrustDevicePostureRule#check_private_key}
    */
    readonly checkPrivateKey?: boolean | cdktf.IResolvable;
    /**
    * Common Name that is protected by the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#cn ZeroTrustDevicePostureRule#cn}
    */
    readonly cn?: string;
    /**
    * Compliance Status.
    * Available values: "compliant", "noncompliant", "unknown", "notapplicable", "ingraceperiod", "error".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#compliance_status ZeroTrustDevicePostureRule#compliance_status}
    */
    readonly complianceStatus?: string;
    /**
    * Posture Integration ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#connection_id ZeroTrustDevicePostureRule#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Count Operator.
    * Available values: "<", "<=", ">", ">=", "==".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#count_operator ZeroTrustDevicePostureRule#count_operator}
    */
    readonly countOperator?: string;
    /**
    * Domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#domain ZeroTrustDevicePostureRule#domain}
    */
    readonly domain?: string;
    /**
    * For more details on eid last seen, refer to the Tanium documentation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#eid_last_seen ZeroTrustDevicePostureRule#eid_last_seen}
    */
    readonly eidLastSeen?: string;
    /**
    * Enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#enabled ZeroTrustDevicePostureRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Whether or not file exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#exists ZeroTrustDevicePostureRule#exists}
    */
    readonly exists?: boolean | cdktf.IResolvable;
    /**
    * List of values indicating purposes for which the certificate public key can be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#extended_key_usage ZeroTrustDevicePostureRule#extended_key_usage}
    */
    readonly extendedKeyUsage?: string[];
    /**
    * List ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether device is infected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#infected ZeroTrustDevicePostureRule#infected}
    */
    readonly infected?: boolean | cdktf.IResolvable;
    /**
    * Whether device is active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#is_active ZeroTrustDevicePostureRule#is_active}
    */
    readonly isActive?: boolean | cdktf.IResolvable;
    /**
    * The Number of Issues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#issue_count ZeroTrustDevicePostureRule#issue_count}
    */
    readonly issueCount?: string;
    /**
    * For more details on last seen, please refer to the Crowdstrike documentation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#last_seen ZeroTrustDevicePostureRule#last_seen}
    */
    readonly lastSeen?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#locations ZeroTrustDevicePostureRule#locations}
    */
    readonly locations?: ZeroTrustDevicePostureRuleInputLocations;
    /**
    * Network status of device.
    * Available values: "connected", "disconnected", "disconnecting", "connecting".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#network_status ZeroTrustDevicePostureRule#network_status}
    */
    readonly networkStatus?: string;
    /**
    * Operating system.
    * Available values: "windows", "linux", "mac", "android", "ios", "chromeos".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#operating_system ZeroTrustDevicePostureRule#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Agent operational state.
    * Available values: "na", "partially_disabled", "auto_fully_disabled", "fully_disabled", "auto_partially_disabled", "disabled_error", "db_corruption".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#operational_state ZeroTrustDevicePostureRule#operational_state}
    */
    readonly operationalState?: string;
    /**
    * Operator.
    * Available values: "<", "<=", ">", ">=", "==".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#operator ZeroTrustDevicePostureRule#operator}
    */
    readonly operator?: string;
    /**
    * Os Version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#os ZeroTrustDevicePostureRule#os}
    */
    readonly os?: string;
    /**
    * Operating System Distribution Name (linux only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#os_distro_name ZeroTrustDevicePostureRule#os_distro_name}
    */
    readonly osDistroName?: string;
    /**
    * Version of OS Distribution (linux only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#os_distro_revision ZeroTrustDevicePostureRule#os_distro_revision}
    */
    readonly osDistroRevision?: string;
    /**
    * Additional operating system version details. For Windows, the UBR (Update Build Revision). For Mac or iOS, the Product Version Extra. For Linux, the distribution name and version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#os_version_extra ZeroTrustDevicePostureRule#os_version_extra}
    */
    readonly osVersionExtra?: string;
    /**
    * Overall.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#overall ZeroTrustDevicePostureRule#overall}
    */
    readonly overall?: string;
    /**
    * File path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#path ZeroTrustDevicePostureRule#path}
    */
    readonly path?: string;
    /**
    * Whether to check all disks for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#require_all ZeroTrustDevicePostureRule#require_all}
    */
    readonly requireAll?: boolean | cdktf.IResolvable;
    /**
    * For more details on risk level, refer to the Tanium documentation.
    * Available values: "low", "medium", "high", "critical".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#risk_level ZeroTrustDevicePostureRule#risk_level}
    */
    readonly riskLevel?: string;
    /**
    * A value between 0-100 assigned to devices set by the 3rd party posture provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#score ZeroTrustDevicePostureRule#score}
    */
    readonly score?: number;
    /**
    * Score Operator.
    * Available values: "<", "<=", ">", ">=", "==".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#score_operator ZeroTrustDevicePostureRule#score_operator}
    */
    readonly scoreOperator?: string;
    /**
    * SensorConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#sensor_config ZeroTrustDevicePostureRule#sensor_config}
    */
    readonly sensorConfig?: string;
    /**
    * SHA-256.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#sha256 ZeroTrustDevicePostureRule#sha256}
    */
    readonly sha256?: string;
    /**
    * For more details on state, please refer to the Crowdstrike documentation.
    * Available values: "online", "offline", "unknown".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#state ZeroTrustDevicePostureRule#state}
    */
    readonly state?: string;
    /**
    * List of certificate Subject Alternative Names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#subject_alternative_names ZeroTrustDevicePostureRule#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: string[];
    /**
    * Signing certificate thumbprint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#thumbprint ZeroTrustDevicePostureRule#thumbprint}
    */
    readonly thumbprint?: string;
    /**
    * For more details on total score, refer to the Tanium documentation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#total_score ZeroTrustDevicePostureRule#total_score}
    */
    readonly totalScore?: number;
    /**
    * Number of days that the antivirus should be updated within.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#update_window_days ZeroTrustDevicePostureRule#update_window_days}
    */
    readonly updateWindowDays?: number;
    /**
    * Version of OS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#version ZeroTrustDevicePostureRule#version}
    */
    readonly version?: string;
    /**
    * Version Operator.
    * Available values: "<", "<=", ">", ">=", "==".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#version_operator ZeroTrustDevicePostureRule#version_operator}
    */
    readonly versionOperator?: string;
}
export declare function zeroTrustDevicePostureRuleInputToTerraform(struct?: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable): any;
export declare function zeroTrustDevicePostureRuleInputToHclTerraform(struct?: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable): any;
export declare class ZeroTrustDevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDevicePostureRuleInput | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDevicePostureRuleInput | cdktf.IResolvable | undefined);
    private _activeThreats?;
    get activeThreats(): number;
    set activeThreats(value: number);
    resetActiveThreats(): void;
    get activeThreatsInput(): number;
    private _authState?;
    get authState(): string[];
    set authState(value: string[]);
    resetAuthState(): void;
    get authStateInput(): string[];
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    resetCertificateId(): void;
    get certificateIdInput(): string;
    private _checkDisks?;
    get checkDisks(): string[];
    set checkDisks(value: string[]);
    resetCheckDisks(): void;
    get checkDisksInput(): string[];
    private _checkPrivateKey?;
    get checkPrivateKey(): boolean | cdktf.IResolvable;
    set checkPrivateKey(value: boolean | cdktf.IResolvable);
    resetCheckPrivateKey(): void;
    get checkPrivateKeyInput(): any;
    private _cn?;
    get cn(): string;
    set cn(value: string);
    resetCn(): void;
    get cnInput(): string;
    private _complianceStatus?;
    get complianceStatus(): string;
    set complianceStatus(value: string);
    resetComplianceStatus(): void;
    get complianceStatusInput(): string;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    resetConnectionId(): void;
    get connectionIdInput(): string;
    private _countOperator?;
    get countOperator(): string;
    set countOperator(value: string);
    resetCountOperator(): void;
    get countOperatorInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    private _eidLastSeen?;
    get eidLastSeen(): string;
    set eidLastSeen(value: string);
    resetEidLastSeen(): void;
    get eidLastSeenInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _exists?;
    get exists(): boolean | cdktf.IResolvable;
    set exists(value: boolean | cdktf.IResolvable);
    resetExists(): void;
    get existsInput(): any;
    private _extendedKeyUsage?;
    get extendedKeyUsage(): string[];
    set extendedKeyUsage(value: string[]);
    resetExtendedKeyUsage(): void;
    get extendedKeyUsageInput(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _infected?;
    get infected(): boolean | cdktf.IResolvable;
    set infected(value: boolean | cdktf.IResolvable);
    resetInfected(): void;
    get infectedInput(): any;
    private _isActive?;
    get isActive(): boolean | cdktf.IResolvable;
    set isActive(value: boolean | cdktf.IResolvable);
    resetIsActive(): void;
    get isActiveInput(): any;
    private _issueCount?;
    get issueCount(): string;
    set issueCount(value: string);
    resetIssueCount(): void;
    get issueCountInput(): string;
    private _lastSeen?;
    get lastSeen(): string;
    set lastSeen(value: string);
    resetLastSeen(): void;
    get lastSeenInput(): string;
    private _locations;
    get locations(): ZeroTrustDevicePostureRuleInputLocationsOutputReference;
    putLocations(value: ZeroTrustDevicePostureRuleInputLocations): void;
    resetLocations(): void;
    get locationsInput(): any;
    private _networkStatus?;
    get networkStatus(): string;
    set networkStatus(value: string);
    resetNetworkStatus(): void;
    get networkStatusInput(): string;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string;
    private _operationalState?;
    get operationalState(): string;
    set operationalState(value: string);
    resetOperationalState(): void;
    get operationalStateInput(): string;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    resetOperator(): void;
    get operatorInput(): string;
    private _os?;
    get os(): string;
    set os(value: string);
    resetOs(): void;
    get osInput(): string;
    private _osDistroName?;
    get osDistroName(): string;
    set osDistroName(value: string);
    resetOsDistroName(): void;
    get osDistroNameInput(): string;
    private _osDistroRevision?;
    get osDistroRevision(): string;
    set osDistroRevision(value: string);
    resetOsDistroRevision(): void;
    get osDistroRevisionInput(): string;
    private _osVersionExtra?;
    get osVersionExtra(): string;
    set osVersionExtra(value: string);
    resetOsVersionExtra(): void;
    get osVersionExtraInput(): string;
    private _overall?;
    get overall(): string;
    set overall(value: string);
    resetOverall(): void;
    get overallInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _requireAll?;
    get requireAll(): boolean | cdktf.IResolvable;
    set requireAll(value: boolean | cdktf.IResolvable);
    resetRequireAll(): void;
    get requireAllInput(): any;
    private _riskLevel?;
    get riskLevel(): string;
    set riskLevel(value: string);
    resetRiskLevel(): void;
    get riskLevelInput(): string;
    private _score?;
    get score(): number;
    set score(value: number);
    resetScore(): void;
    get scoreInput(): number;
    private _scoreOperator?;
    get scoreOperator(): string;
    set scoreOperator(value: string);
    resetScoreOperator(): void;
    get scoreOperatorInput(): string;
    private _sensorConfig?;
    get sensorConfig(): string;
    set sensorConfig(value: string);
    resetSensorConfig(): void;
    get sensorConfigInput(): string;
    private _sha256?;
    get sha256(): string;
    set sha256(value: string);
    resetSha256(): void;
    get sha256Input(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    private _subjectAlternativeNames?;
    get subjectAlternativeNames(): string[];
    set subjectAlternativeNames(value: string[]);
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): string[];
    private _thumbprint?;
    get thumbprint(): string;
    set thumbprint(value: string);
    resetThumbprint(): void;
    get thumbprintInput(): string;
    private _totalScore?;
    get totalScore(): number;
    set totalScore(value: number);
    resetTotalScore(): void;
    get totalScoreInput(): number;
    private _updateWindowDays?;
    get updateWindowDays(): number;
    set updateWindowDays(value: number);
    resetUpdateWindowDays(): void;
    get updateWindowDaysInput(): number;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _versionOperator?;
    get versionOperator(): string;
    set versionOperator(value: string);
    resetVersionOperator(): void;
    get versionOperatorInput(): string;
}
export interface ZeroTrustDevicePostureRuleMatch {
    /**
    * Available values: "windows", "mac", "linux", "android", "ios", "chromeos".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#platform ZeroTrustDevicePostureRule#platform}
    */
    readonly platform?: string;
}
export declare function zeroTrustDevicePostureRuleMatchToTerraform(struct?: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable): any;
export declare function zeroTrustDevicePostureRuleMatchToHclTerraform(struct?: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable): any;
export declare class ZeroTrustDevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDevicePostureRuleMatch | cdktf.IResolvable | undefined);
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string;
}
export declare class ZeroTrustDevicePostureRuleMatchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDevicePostureRuleMatchOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
export declare class ZeroTrustDevicePostureRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureRuleConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDevicePostureRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _expiration?;
    get expiration(): string;
    set expiration(value: string);
    resetExpiration(): void;
    get expirationInput(): string;
    get id(): any;
    private _input;
    get input(): ZeroTrustDevicePostureRuleInputOutputReference;
    putInput(value: ZeroTrustDevicePostureRuleInput): void;
    resetInput(): void;
    get inputInput(): any;
    private _match;
    get match(): ZeroTrustDevicePostureRuleMatchList;
    putMatch(value: ZeroTrustDevicePostureRuleMatch[] | cdktf.IResolvable): void;
    resetMatch(): void;
    get matchInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
