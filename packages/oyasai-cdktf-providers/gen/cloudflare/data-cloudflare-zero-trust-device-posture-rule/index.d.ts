import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDevicePostureRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}
    */
    readonly accountId?: string;
    /**
    * API UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule#rule_id DataCloudflareZeroTrustDevicePostureRule#rule_id}
    */
    readonly ruleId: string;
}
export interface DataCloudflareZeroTrustDevicePostureRuleInputLocations {
}
export declare function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleInputLocations): any;
export declare function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleInputLocations): any;
export declare class DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRuleInputLocations | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRuleInputLocations | undefined);
    get paths(): any;
    get trustStores(): any;
}
export interface DataCloudflareZeroTrustDevicePostureRuleInput {
}
export declare function dataCloudflareZeroTrustDevicePostureRuleInputToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleInput): any;
export declare function dataCloudflareZeroTrustDevicePostureRuleInputToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleInput): any;
export declare class DataCloudflareZeroTrustDevicePostureRuleInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRuleInput | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRuleInput | undefined);
    get activeThreats(): any;
    get authState(): any;
    get certificateId(): any;
    get checkDisks(): any;
    get checkPrivateKey(): any;
    get cn(): any;
    get complianceStatus(): any;
    get connectionId(): any;
    get countOperator(): any;
    get domain(): any;
    get eidLastSeen(): any;
    get enabled(): any;
    get exists(): any;
    get extendedKeyUsage(): any;
    get id(): any;
    get infected(): any;
    get isActive(): any;
    get issueCount(): any;
    get lastSeen(): any;
    private _locations;
    get locations(): DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference;
    get networkStatus(): any;
    get operatingSystem(): any;
    get operationalState(): any;
    get operator(): any;
    get os(): any;
    get osDistroName(): any;
    get osDistroRevision(): any;
    get osVersionExtra(): any;
    get overall(): any;
    get path(): any;
    get requireAll(): any;
    get riskLevel(): any;
    get score(): any;
    get scoreOperator(): any;
    get sensorConfig(): any;
    get sha256(): any;
    get state(): any;
    get subjectAlternativeNames(): any;
    get thumbprint(): any;
    get totalScore(): any;
    get updateWindowDays(): any;
    get version(): any;
    get versionOperator(): any;
}
export interface DataCloudflareZeroTrustDevicePostureRuleMatch {
}
export declare function dataCloudflareZeroTrustDevicePostureRuleMatchToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleMatch): any;
export declare function dataCloudflareZeroTrustDevicePostureRuleMatchToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRuleMatch): any;
export declare class DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRuleMatch | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRuleMatch | undefined);
    get platform(): any;
}
export declare class DataCloudflareZeroTrustDevicePostureRuleMatchList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
export declare class DataCloudflareZeroTrustDevicePostureRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDevicePostureRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get description(): any;
    get expiration(): any;
    get id(): any;
    private _input;
    get input(): DataCloudflareZeroTrustDevicePostureRuleInputOutputReference;
    private _match;
    get match(): DataCloudflareZeroTrustDevicePostureRuleMatchList;
    get name(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    get ruleIdInput(): string;
    get schedule(): any;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
