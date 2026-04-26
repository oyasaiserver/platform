import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDevicePostureRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules#max_items DataCloudflareZeroTrustDevicePostureRules#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDevicePostureRulesResultInputLocations {
}
export declare function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultInputLocations): any;
export declare function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultInputLocations): any;
export declare class DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRulesResultInputLocations | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRulesResultInputLocations | undefined);
    get paths(): any;
    get trustStores(): any;
}
export interface DataCloudflareZeroTrustDevicePostureRulesResultInput {
}
export declare function dataCloudflareZeroTrustDevicePostureRulesResultInputToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultInput): any;
export declare function dataCloudflareZeroTrustDevicePostureRulesResultInputToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultInput): any;
export declare class DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRulesResultInput | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRulesResultInput | undefined);
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
    get locations(): DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference;
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
export interface DataCloudflareZeroTrustDevicePostureRulesResultMatch {
}
export declare function dataCloudflareZeroTrustDevicePostureRulesResultMatchToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultMatch): any;
export declare function dataCloudflareZeroTrustDevicePostureRulesResultMatchToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResultMatch): any;
export declare class DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRulesResultMatch | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRulesResultMatch | undefined);
    get platform(): any;
}
export declare class DataCloudflareZeroTrustDevicePostureRulesResultMatchList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference;
}
export interface DataCloudflareZeroTrustDevicePostureRulesResult {
}
export declare function dataCloudflareZeroTrustDevicePostureRulesResultToTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResult): any;
export declare function dataCloudflareZeroTrustDevicePostureRulesResultToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureRulesResult): any;
export declare class DataCloudflareZeroTrustDevicePostureRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDevicePostureRulesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureRulesResult | undefined);
    get description(): any;
    get expiration(): any;
    get id(): any;
    private _input;
    get input(): DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference;
    private _match;
    get match(): DataCloudflareZeroTrustDevicePostureRulesResultMatchList;
    get name(): any;
    get schedule(): any;
    get type(): any;
}
export declare class DataCloudflareZeroTrustDevicePostureRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDevicePostureRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules}
*/
export declare class DataCloudflareZeroTrustDevicePostureRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_posture_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRules to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDevicePostureRulesConfig);
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
    get result(): DataCloudflareZeroTrustDevicePostureRulesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
