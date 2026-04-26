import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamicSecretMongoAtlasConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#configuration DynamicSecretMongoAtlas#configuration}
    */
    readonly configuration: DynamicSecretMongoAtlasConfiguration;
    /**
    * The default TTL that will be applied for all the leases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#default_ttl DynamicSecretMongoAtlas#default_ttl}
    */
    readonly defaultTtl: string;
    /**
    * The slug of the environment to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#environment_slug DynamicSecretMongoAtlas#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The maximum limit a TTL can be leased or renewed for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#max_ttl DynamicSecretMongoAtlas#max_ttl}
    */
    readonly maxTtl?: string;
    /**
    * The metadata associated with this dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#metadata DynamicSecretMongoAtlas#metadata}
    */
    readonly metadata?: DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable;
    /**
    * The name of the dynamic secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#name DynamicSecretMongoAtlas#name}
    */
    readonly name: string;
    /**
    * The path to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#path DynamicSecretMongoAtlas#path}
    */
    readonly path: string;
    /**
    * The slug of the project to create dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#project_slug DynamicSecretMongoAtlas#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The username template of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#username_template DynamicSecretMongoAtlas#username_template}
    */
    readonly usernameTemplate?: string;
}
export interface DynamicSecretMongoAtlasConfigurationRoles {
    /**
    * Collection on which this role applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#collection_name DynamicSecretMongoAtlas#collection_name}
    */
    readonly collectionName?: string;
    /**
    * Database to which the user is granted access privileges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#database_name DynamicSecretMongoAtlas#database_name}
    */
    readonly databaseName: string;
    /**
    * Human-readable label that identifies a group of privileges assigned to a database user. This value can either be a built-in role or a custom role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#role_name DynamicSecretMongoAtlas#role_name}
    */
    readonly roleName: string;
}
export declare function dynamicSecretMongoAtlasConfigurationRolesToTerraform(struct?: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable): any;
export declare function dynamicSecretMongoAtlasConfigurationRolesToHclTerraform(struct?: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable): any;
export declare class DynamicSecretMongoAtlasConfigurationRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoAtlasConfigurationRoles | cdktf.IResolvable | undefined);
    private _collectionName?;
    get collectionName(): string;
    set collectionName(value: string);
    resetCollectionName(): void;
    get collectionNameInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    get roleNameInput(): string;
}
export declare class DynamicSecretMongoAtlasConfigurationRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretMongoAtlasConfigurationRolesOutputReference;
}
export interface DynamicSecretMongoAtlasConfigurationScopes {
    /**
    * Human-readable label that identifies the cluster or MongoDB Atlas Data Lake that this database user can access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#name DynamicSecretMongoAtlas#name}
    */
    readonly name: string;
    /**
    * Category of resource that this database user can access. Supported options: CLUSTER, DATA_LAKE, STREAM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#type DynamicSecretMongoAtlas#type}
    */
    readonly type: string;
}
export declare function dynamicSecretMongoAtlasConfigurationScopesToTerraform(struct?: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable): any;
export declare function dynamicSecretMongoAtlasConfigurationScopesToHclTerraform(struct?: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable): any;
export declare class DynamicSecretMongoAtlasConfigurationScopesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoAtlasConfigurationScopes | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class DynamicSecretMongoAtlasConfigurationScopesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretMongoAtlasConfigurationScopesOutputReference;
}
export interface DynamicSecretMongoAtlasConfiguration {
    /**
    * Admin user private API key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#admin_private_key DynamicSecretMongoAtlas#admin_private_key}
    */
    readonly adminPrivateKey: string;
    /**
    * Admin user public API key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#admin_public_key DynamicSecretMongoAtlas#admin_public_key}
    */
    readonly adminPublicKey: string;
    /**
    * Unique 24-hexadecimal digit string that identifies your project. This is the same as the project ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#group_id DynamicSecretMongoAtlas#group_id}
    */
    readonly groupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#roles DynamicSecretMongoAtlas#roles}
    */
    readonly roles: DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#scopes DynamicSecretMongoAtlas#scopes}
    */
    readonly scopes?: DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable;
}
export declare function dynamicSecretMongoAtlasConfigurationToTerraform(struct?: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable): any;
export declare function dynamicSecretMongoAtlasConfigurationToHclTerraform(struct?: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable): any;
export declare class DynamicSecretMongoAtlasConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoAtlasConfiguration | cdktf.IResolvable | undefined);
    private _adminPrivateKey?;
    get adminPrivateKey(): string;
    set adminPrivateKey(value: string);
    get adminPrivateKeyInput(): string;
    private _adminPublicKey?;
    get adminPublicKey(): string;
    set adminPublicKey(value: string);
    get adminPublicKeyInput(): string;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string;
    private _roles;
    get roles(): DynamicSecretMongoAtlasConfigurationRolesList;
    putRoles(value: DynamicSecretMongoAtlasConfigurationRoles[] | cdktf.IResolvable): void;
    get rolesInput(): any;
    private _scopes;
    get scopes(): DynamicSecretMongoAtlasConfigurationScopesList;
    putScopes(value: DynamicSecretMongoAtlasConfigurationScopes[] | cdktf.IResolvable): void;
    resetScopes(): void;
    get scopesInput(): any;
}
export interface DynamicSecretMongoAtlasMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#key DynamicSecretMongoAtlas#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#value DynamicSecretMongoAtlas#value}
    */
    readonly value: string;
}
export declare function dynamicSecretMongoAtlasMetadataToTerraform(struct?: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable): any;
export declare function dynamicSecretMongoAtlasMetadataToHclTerraform(struct?: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable): any;
export declare class DynamicSecretMongoAtlasMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretMongoAtlasMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoAtlasMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class DynamicSecretMongoAtlasMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretMongoAtlasMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas}
*/
export declare class DynamicSecretMongoAtlas extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_dynamic_secret_mongo_atlas";
    /**
    * Generates CDKTF code for importing a DynamicSecretMongoAtlas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretMongoAtlas to import
    * @param importFromId The id of the existing DynamicSecretMongoAtlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretMongoAtlas to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretMongoAtlasConfig
    */
    constructor(scope: Construct, id: string, config: DynamicSecretMongoAtlasConfig);
    private _configuration;
    get configuration(): DynamicSecretMongoAtlasConfigurationOutputReference;
    putConfiguration(value: DynamicSecretMongoAtlasConfiguration): void;
    get configurationInput(): any;
    private _defaultTtl?;
    get defaultTtl(): string;
    set defaultTtl(value: string);
    get defaultTtlInput(): string;
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    get id(): any;
    private _maxTtl?;
    get maxTtl(): string;
    set maxTtl(value: string);
    resetMaxTtl(): void;
    get maxTtlInput(): string;
    private _metadata;
    get metadata(): DynamicSecretMongoAtlasMetadataList;
    putMetadata(value: DynamicSecretMongoAtlasMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _usernameTemplate?;
    get usernameTemplate(): string;
    set usernameTemplate(value: string);
    resetUsernameTemplate(): void;
    get usernameTemplateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
