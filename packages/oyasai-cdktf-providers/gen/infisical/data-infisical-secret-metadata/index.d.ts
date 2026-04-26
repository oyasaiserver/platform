import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalSecretMetadataConfig extends cdktf.TerraformMetaArguments {
    /**
    * The environment slug where the secret resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#environment_slug DataInfisicalSecretMetadata#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The path to the folder where the secret is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#folder_path DataInfisicalSecretMetadata#folder_path}
    */
    readonly folderPath: string;
    /**
    * The name of the secret to retrieve properties for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#name DataInfisicalSecretMetadata#name}
    */
    readonly name: string;
    /**
    * The Infisical project ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#project_id DataInfisicalSecretMetadata#project_id}
    */
    readonly projectId: string;
    /**
    * The type of the secret (shared or personal). Defaults to shared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#secret_type DataInfisicalSecretMetadata#secret_type}
    */
    readonly secretType?: string;
}
export interface DataInfisicalSecretMetadataSecretMetadata {
}
export declare function dataInfisicalSecretMetadataSecretMetadataToTerraform(struct?: DataInfisicalSecretMetadataSecretMetadata): any;
export declare function dataInfisicalSecretMetadataSecretMetadataToHclTerraform(struct?: DataInfisicalSecretMetadataSecretMetadata): any;
export declare class DataInfisicalSecretMetadataSecretMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataInfisicalSecretMetadataSecretMetadata | undefined;
    set internalValue(value: DataInfisicalSecretMetadataSecretMetadata | undefined);
    get isEncrypted(): any;
    get key(): any;
    get value(): any;
}
export declare class DataInfisicalSecretMetadataSecretMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataInfisicalSecretMetadataSecretMetadataOutputReference;
}
export interface DataInfisicalSecretMetadataTags {
}
export declare function dataInfisicalSecretMetadataTagsToTerraform(struct?: DataInfisicalSecretMetadataTags): any;
export declare function dataInfisicalSecretMetadataTagsToHclTerraform(struct?: DataInfisicalSecretMetadataTags): any;
export declare class DataInfisicalSecretMetadataTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataInfisicalSecretMetadataTags | undefined;
    set internalValue(value: DataInfisicalSecretMetadataTags | undefined);
    get color(): any;
    get id(): any;
    get name(): any;
    get slug(): any;
}
export declare class DataInfisicalSecretMetadataTagsList extends cdktf.ComplexList {
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
    get(index: number): DataInfisicalSecretMetadataTagsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata infisical_secret_metadata}
*/
export declare class DataInfisicalSecretMetadata extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_secret_metadata";
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretMetadata resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretMetadata to import
    * @param importFromId The id of the existing DataInfisicalSecretMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretMetadata to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata infisical_secret_metadata} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretMetadataConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalSecretMetadataConfig);
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    private _folderPath?;
    get folderPath(): string;
    set folderPath(value: string);
    get folderPathInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretMetadata;
    get secretMetadata(): DataInfisicalSecretMetadataSecretMetadataList;
    private _secretType?;
    get secretType(): string;
    set secretType(value: string);
    resetSecretType(): void;
    get secretTypeInput(): string;
    get secretVersion(): any;
    private _tags;
    get tags(): DataInfisicalSecretMetadataTagsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
