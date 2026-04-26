import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2DataCatalogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Use this to identify the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#account_id R2DataCatalog#account_id}
    */
    readonly accountId?: string;
    /**
    * Specifies the R2 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#bucket_name R2DataCatalog#bucket_name}
    */
    readonly bucketName: string;
}
export interface R2DataCatalogMaintenanceConfigCompaction {
}
export declare function r2DataCatalogMaintenanceConfigCompactionToTerraform(struct?: R2DataCatalogMaintenanceConfigCompaction): any;
export declare function r2DataCatalogMaintenanceConfigCompactionToHclTerraform(struct?: R2DataCatalogMaintenanceConfigCompaction): any;
export declare class R2DataCatalogMaintenanceConfigCompactionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2DataCatalogMaintenanceConfigCompaction | undefined;
    set internalValue(value: R2DataCatalogMaintenanceConfigCompaction | undefined);
    get state(): any;
    get targetSizeMb(): any;
}
export interface R2DataCatalogMaintenanceConfigSnapshotExpiration {
}
export declare function r2DataCatalogMaintenanceConfigSnapshotExpirationToTerraform(struct?: R2DataCatalogMaintenanceConfigSnapshotExpiration): any;
export declare function r2DataCatalogMaintenanceConfigSnapshotExpirationToHclTerraform(struct?: R2DataCatalogMaintenanceConfigSnapshotExpiration): any;
export declare class R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2DataCatalogMaintenanceConfigSnapshotExpiration | undefined;
    set internalValue(value: R2DataCatalogMaintenanceConfigSnapshotExpiration | undefined);
    get maxSnapshotAge(): any;
    get minSnapshotsToKeep(): any;
    get state(): any;
}
export interface R2DataCatalogMaintenanceConfig {
}
export declare function r2DataCatalogMaintenanceConfigToTerraform(struct?: R2DataCatalogMaintenanceConfig): any;
export declare function r2DataCatalogMaintenanceConfigToHclTerraform(struct?: R2DataCatalogMaintenanceConfig): any;
export declare class R2DataCatalogMaintenanceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2DataCatalogMaintenanceConfig | undefined;
    set internalValue(value: R2DataCatalogMaintenanceConfig | undefined);
    private _compaction;
    get compaction(): R2DataCatalogMaintenanceConfigCompactionOutputReference;
    private _snapshotExpiration;
    get snapshotExpiration(): R2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog cloudflare_r2_data_catalog}
*/
export declare class R2DataCatalog extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_data_catalog";
    /**
    * Generates CDKTF code for importing a R2DataCatalog resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2DataCatalog to import
    * @param importFromId The id of the existing R2DataCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2DataCatalog to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_data_catalog cloudflare_r2_data_catalog} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2DataCatalogConfig
    */
    constructor(scope: Construct, id: string, config: R2DataCatalogConfig);
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
    get maintenanceConfig(): R2DataCatalogMaintenanceConfigOutputReference;
    get name(): any;
    get status(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
