import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpCustomEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry#account_id DataCloudflareZeroTrustDlpCustomEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry#entry_id DataCloudflareZeroTrustDlpCustomEntry#entry_id}
    */
    readonly entryId: string;
}
export interface DataCloudflareZeroTrustDlpCustomEntryConfidence {
}
export declare function dataCloudflareZeroTrustDlpCustomEntryConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryConfidence): any;
export declare function dataCloudflareZeroTrustDlpCustomEntryConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryConfidence): any;
export declare class DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntryConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpCustomEntryPattern {
}
export declare function dataCloudflareZeroTrustDlpCustomEntryPatternToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryPattern): any;
export declare function dataCloudflareZeroTrustDlpCustomEntryPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryPattern): any;
export declare class DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntryPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpCustomEntryProfiles {
}
export declare function dataCloudflareZeroTrustDlpCustomEntryProfilesToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryProfiles): any;
export declare function dataCloudflareZeroTrustDlpCustomEntryProfilesToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryProfiles): any;
export declare class DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntryProfiles | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDlpCustomEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpCustomEntryProfilesOutputReference;
}
export interface DataCloudflareZeroTrustDlpCustomEntryVariant {
}
export declare function dataCloudflareZeroTrustDlpCustomEntryVariantToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryVariant): any;
export declare function dataCloudflareZeroTrustDlpCustomEntryVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntryVariant): any;
export declare class DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntryVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}
*/
export declare class DataCloudflareZeroTrustDlpCustomEntry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_entry";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomEntryConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpCustomEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpCustomEntryConfidenceOutputReference;
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
    get pattern(): DataCloudflareZeroTrustDlpCustomEntryPatternOutputReference;
    get profileId(): any;
    private _profiles;
    get profiles(): DataCloudflareZeroTrustDlpCustomEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpCustomEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
