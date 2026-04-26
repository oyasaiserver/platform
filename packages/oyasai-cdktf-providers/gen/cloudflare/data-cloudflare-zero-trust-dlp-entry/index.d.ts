import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entry#account_id DataCloudflareZeroTrustDlpEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entry#entry_id DataCloudflareZeroTrustDlpEntry#entry_id}
    */
    readonly entryId: string;
}
export interface DataCloudflareZeroTrustDlpEntryConfidence {
}
export declare function dataCloudflareZeroTrustDlpEntryConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpEntryConfidence): any;
export declare function dataCloudflareZeroTrustDlpEntryConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntryConfidence): any;
export declare class DataCloudflareZeroTrustDlpEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntryConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpEntryPattern {
}
export declare function dataCloudflareZeroTrustDlpEntryPatternToTerraform(struct?: DataCloudflareZeroTrustDlpEntryPattern): any;
export declare function dataCloudflareZeroTrustDlpEntryPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntryPattern): any;
export declare class DataCloudflareZeroTrustDlpEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntryPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpEntryProfiles {
}
export declare function dataCloudflareZeroTrustDlpEntryProfilesToTerraform(struct?: DataCloudflareZeroTrustDlpEntryProfiles): any;
export declare function dataCloudflareZeroTrustDlpEntryProfilesToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntryProfiles): any;
export declare class DataCloudflareZeroTrustDlpEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpEntryProfiles | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDlpEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpEntryProfilesOutputReference;
}
export interface DataCloudflareZeroTrustDlpEntryVariant {
}
export declare function dataCloudflareZeroTrustDlpEntryVariantToTerraform(struct?: DataCloudflareZeroTrustDlpEntryVariant): any;
export declare function dataCloudflareZeroTrustDlpEntryVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntryVariant): any;
export declare class DataCloudflareZeroTrustDlpEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntryVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry}
*/
export declare class DataCloudflareZeroTrustDlpEntry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_entry";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpEntryConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpEntryConfidenceOutputReference;
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
    get pattern(): DataCloudflareZeroTrustDlpEntryPatternOutputReference;
    get profileId(): any;
    private _profiles;
    get profiles(): DataCloudflareZeroTrustDlpEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
