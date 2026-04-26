import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2DataCatalogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Use this to identify the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_data_catalog#account_id DataCloudflareR2DataCatalog#account_id}
    */
    readonly accountId?: string;
    /**
    * Specifies the R2 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_data_catalog#bucket_name DataCloudflareR2DataCatalog#bucket_name}
    */
    readonly bucketName: string;
}
export interface DataCloudflareR2DataCatalogMaintenanceConfigCompaction {
}
export declare function dataCloudflareR2DataCatalogMaintenanceConfigCompactionToTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfigCompaction): any;
export declare function dataCloudflareR2DataCatalogMaintenanceConfigCompactionToHclTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfigCompaction): any;
export declare class DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2DataCatalogMaintenanceConfigCompaction | undefined;
    set internalValue(value: DataCloudflareR2DataCatalogMaintenanceConfigCompaction | undefined);
    get state(): any;
    get targetSizeMb(): any;
}
export interface DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration {
}
export declare function dataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration): any;
export declare function dataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration): any;
export declare class DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration | undefined;
    set internalValue(value: DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration | undefined);
    get maxSnapshotAge(): any;
    get minSnapshotsToKeep(): any;
    get state(): any;
}
export interface DataCloudflareR2DataCatalogMaintenanceConfig {
}
export declare function dataCloudflareR2DataCatalogMaintenanceConfigToTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfig): any;
export declare function dataCloudflareR2DataCatalogMaintenanceConfigToHclTerraform(struct?: DataCloudflareR2DataCatalogMaintenanceConfig): any;
export declare class DataCloudflareR2DataCatalogMaintenanceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2DataCatalogMaintenanceConfig | undefined;
    set internalValue(value: DataCloudflareR2DataCatalogMaintenanceConfig | undefined);
    private _compaction;
    get compaction(): DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference;
    private _snapshotExpiration;
    get snapshotExpiration(): DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_data_catalog cloudflare_r2_data_catalog}
*/
export declare class DataCloudflareR2DataCatalog extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_data_catalog";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2DataCatalog resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2DataCatalog to import
    * @param importFromId The id of the existing DataCloudflareR2DataCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_data_catalog#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2DataCatalog to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_data_catalog cloudflare_r2_data_catalog} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2DataCatalogConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2DataCatalogConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get bucket(): any;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get credentialStatus(): any;
    get id(): any;
    private _maintenanceConfig;
    get maintenanceConfig(): DataCloudflareR2DataCatalogMaintenanceConfigOutputReference;
    get name(): any;
    get status(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
