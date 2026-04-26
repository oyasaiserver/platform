import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpIntegrationEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry#account_id DataCloudflareZeroTrustDlpIntegrationEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry#entry_id DataCloudflareZeroTrustDlpIntegrationEntry#entry_id}
    */
    readonly entryId: string;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntryConfidence {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryConfidence): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntryConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryConfidence): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntryConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntryPattern {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntryPatternToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryPattern): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntryPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryPattern): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntryPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntryProfiles {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntryProfilesToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryProfiles): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntryProfilesToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryProfiles): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntryProfiles | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDlpIntegrationEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpIntegrationEntryProfilesOutputReference;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntryVariant {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntryVariantToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryVariant): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntryVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntryVariant): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntryVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}
*/
export declare class DataCloudflareZeroTrustDlpIntegrationEntry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_integration_entry";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpIntegrationEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpIntegrationEntryConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpIntegrationEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    private _entryId?;
    get entryId(): string;
    set entryId(value: string);
    get entryIdInput(): string;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference;
    get profileId(): any;
    private _profiles;
    get profiles(): DataCloudflareZeroTrustDlpIntegrationEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
