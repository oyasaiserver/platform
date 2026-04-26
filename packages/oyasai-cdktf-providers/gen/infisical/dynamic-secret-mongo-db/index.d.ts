import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamicSecretMongoDbConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#configuration DynamicSecretMongoDb#configuration}
    */
    readonly configuration: DynamicSecretMongoDbConfiguration;
    /**
    * The default TTL that will be applied for all the leases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#default_ttl DynamicSecretMongoDb#default_ttl}
    */
    readonly defaultTtl: string;
    /**
    * The slug of the environment to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#environment_slug DynamicSecretMongoDb#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The maximum limit a TTL can be leased or renewed for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#max_ttl DynamicSecretMongoDb#max_ttl}
    */
    readonly maxTtl?: string;
    /**
    * The metadata associated with this dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#metadata DynamicSecretMongoDb#metadata}
    */
    readonly metadata?: DynamicSecretMongoDbMetadata[] | cdktf.IResolvable;
    /**
    * The name of the dynamic secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#name DynamicSecretMongoDb#name}
    */
    readonly name: string;
    /**
    * The path to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#path DynamicSecretMongoDb#path}
    */
    readonly path: string;
    /**
    * The slug of the project to create dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#project_slug DynamicSecretMongoDb#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The username template of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#username_template DynamicSecretMongoDb#username_template}
    */
    readonly usernameTemplate?: string;
}
export interface DynamicSecretMongoDbConfiguration {
    /**
    * The CA certificate to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#ca DynamicSecretMongoDb#ca}
    */
    readonly ca?: string;
    /**
    * The name of the database to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#database DynamicSecretMongoDb#database}
    */
    readonly database: string;
    /**
    * The host of the database server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#host DynamicSecretMongoDb#host}
    */
    readonly host: string;
    /**
    * The password to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#password DynamicSecretMongoDb#password}
    */
    readonly password: string;
    /**
    * The port of the database server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#port DynamicSecretMongoDb#port}
    */
    readonly port?: number;
    /**
    * A list of role names to assign to the user. The role names can either be built-in or custom.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#roles DynamicSecretMongoDb#roles}
    */
    readonly roles: string[];
    /**
    * The username to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#username DynamicSecretMongoDb#username}
    */
    readonly username: string;
}
export declare function dynamicSecretMongoDbConfigurationToTerraform(struct?: DynamicSecretMongoDbConfiguration | cdktf.IResolvable): any;
export declare function dynamicSecretMongoDbConfigurationToHclTerraform(struct?: DynamicSecretMongoDbConfiguration | cdktf.IResolvable): any;
export declare class DynamicSecretMongoDbConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretMongoDbConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoDbConfiguration | cdktf.IResolvable | undefined);
    private _ca?;
    get ca(): string;
    set ca(value: string);
    resetCa(): void;
    get caInput(): string;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    get rolesInput(): string[];
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface DynamicSecretMongoDbMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#key DynamicSecretMongoDb#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#value DynamicSecretMongoDb#value}
    */
    readonly value: string;
}
export declare function dynamicSecretMongoDbMetadataToTerraform(struct?: DynamicSecretMongoDbMetadata | cdktf.IResolvable): any;
export declare function dynamicSecretMongoDbMetadataToHclTerraform(struct?: DynamicSecretMongoDbMetadata | cdktf.IResolvable): any;
export declare class DynamicSecretMongoDbMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretMongoDbMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretMongoDbMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class DynamicSecretMongoDbMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretMongoDbMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretMongoDbMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db infisical_dynamic_secret_mongo_db}
*/
export declare class DynamicSecretMongoDb extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_dynamic_secret_mongo_db";
    /**
    * Generates CDKTF code for importing a DynamicSecretMongoDb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretMongoDb to import
    * @param importFromId The id of the existing DynamicSecretMongoDb that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretMongoDb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db infisical_dynamic_secret_mongo_db} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretMongoDbConfig
    */
    constructor(scope: Construct, id: string, config: DynamicSecretMongoDbConfig);
    private _configuration;
    get configuration(): DynamicSecretMongoDbConfigurationOutputReference;
    putConfiguration(value: DynamicSecretMongoDbConfiguration): void;
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
    get metadata(): DynamicSecretMongoDbMetadataList;
    putMetadata(value: DynamicSecretMongoDbMetadata[] | cdktf.IResolvable): void;
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
