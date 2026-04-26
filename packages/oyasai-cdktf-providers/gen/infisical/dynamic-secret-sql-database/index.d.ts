import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamicSecretSqlDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#configuration DynamicSecretSqlDatabase#configuration}
    */
    readonly configuration: DynamicSecretSqlDatabaseConfiguration;
    /**
    * The default TTL that will be applied for all the leases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#default_ttl DynamicSecretSqlDatabase#default_ttl}
    */
    readonly defaultTtl: string;
    /**
    * The slug of the environment to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#environment_slug DynamicSecretSqlDatabase#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The maximum limit a TTL can be leased or renewed for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#max_ttl DynamicSecretSqlDatabase#max_ttl}
    */
    readonly maxTtl?: string;
    /**
    * The metadata associated with this dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#metadata DynamicSecretSqlDatabase#metadata}
    */
    readonly metadata?: DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable;
    /**
    * The name of the dynamic secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#name DynamicSecretSqlDatabase#name}
    */
    readonly name: string;
    /**
    * The path to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#path DynamicSecretSqlDatabase#path}
    */
    readonly path: string;
    /**
    * The slug of the project to create dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#project_slug DynamicSecretSqlDatabase#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The username template of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#username_template DynamicSecretSqlDatabase#username_template}
    */
    readonly usernameTemplate?: string;
}
export interface DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired {
    /**
    * The number of digits required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#digits DynamicSecretSqlDatabase#digits}
    */
    readonly digits: number;
    /**
    * The number of lowercase characters required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#lowercase DynamicSecretSqlDatabase#lowercase}
    */
    readonly lowercase: number;
    /**
    * The number of symbols required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#symbols DynamicSecretSqlDatabase#symbols}
    */
    readonly symbols: number;
    /**
    * The number of uppercase characters required in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#uppercase DynamicSecretSqlDatabase#uppercase}
    */
    readonly uppercase: number;
}
export declare function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable): any;
export declare function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable): any;
export declare class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired | cdktf.IResolvable | undefined);
    private _digits?;
    get digits(): number;
    set digits(value: number);
    get digitsInput(): number;
    private _lowercase?;
    get lowercase(): number;
    set lowercase(value: number);
    get lowercaseInput(): number;
    private _symbols?;
    get symbols(): number;
    set symbols(value: number);
    get symbolsInput(): number;
    private _uppercase?;
    get uppercase(): number;
    set uppercase(value: number);
    get uppercaseInput(): number;
}
export interface DynamicSecretSqlDatabaseConfigurationPasswordRequirements {
    /**
    * The symbols allowed in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#allowed_symbols DynamicSecretSqlDatabase#allowed_symbols}
    */
    readonly allowedSymbols?: string;
    /**
    * The length of the password to use to create the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#length DynamicSecretSqlDatabase#length}
    */
    readonly length: number;
    /**
    * The required characters to use to create the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#required DynamicSecretSqlDatabase#required}
    */
    readonly required: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired;
}
export declare function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable): any;
export declare function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable): any;
export declare class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirements | cdktf.IResolvable | undefined);
    private _allowedSymbols?;
    get allowedSymbols(): string;
    set allowedSymbols(value: string);
    resetAllowedSymbols(): void;
    get allowedSymbolsInput(): string;
    private _length?;
    get length(): number;
    set length(value: number);
    get lengthInput(): number;
    private _required;
    get required(): DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference;
    putRequired(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired): void;
    get requiredInput(): any;
}
export interface DynamicSecretSqlDatabaseConfiguration {
    /**
    * The CA certificate to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#ca DynamicSecretSqlDatabase#ca}
    */
    readonly ca?: string;
    /**
    * The database client to use. Currently supported values are postgres, mysql2, oracledb, mssql, sap-ase, and vertica.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#client DynamicSecretSqlDatabase#client}
    */
    readonly client: string;
    /**
    * The creation statement to use to create the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#creation_statement DynamicSecretSqlDatabase#creation_statement}
    */
    readonly creationStatement: string;
    /**
    * The name of the database to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#database DynamicSecretSqlDatabase#database}
    */
    readonly database: string;
    /**
    * The Gateway ID to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#gateway_id DynamicSecretSqlDatabase#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * The host of the database server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#host DynamicSecretSqlDatabase#host}
    */
    readonly host: string;
    /**
    * The password to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#password DynamicSecretSqlDatabase#password}
    */
    readonly password: string;
    /**
    * The password requirements to use to create the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#password_requirements DynamicSecretSqlDatabase#password_requirements}
    */
    readonly passwordRequirements?: DynamicSecretSqlDatabaseConfigurationPasswordRequirements;
    /**
    * The port of the database server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#port DynamicSecretSqlDatabase#port}
    */
    readonly port: number;
    /**
    * The renew statement to use to renew the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#renew_statement DynamicSecretSqlDatabase#renew_statement}
    */
    readonly renewStatement?: string;
    /**
    * The revocation statement to use to revoke the dynamic secret lease.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#revocation_statement DynamicSecretSqlDatabase#revocation_statement}
    */
    readonly revocationStatement: string;
    /**
    * The username to use to connect to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#username DynamicSecretSqlDatabase#username}
    */
    readonly username: string;
}
export declare function dynamicSecretSqlDatabaseConfigurationToTerraform(struct?: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable): any;
export declare function dynamicSecretSqlDatabaseConfigurationToHclTerraform(struct?: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable): any;
export declare class DynamicSecretSqlDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretSqlDatabaseConfiguration | cdktf.IResolvable | undefined);
    private _ca?;
    get ca(): string;
    set ca(value: string);
    resetCa(): void;
    get caInput(): string;
    private _client?;
    get client(): string;
    set client(value: string);
    get clientInput(): string;
    private _creationStatement?;
    get creationStatement(): string;
    set creationStatement(value: string);
    get creationStatementInput(): string;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _passwordRequirements;
    get passwordRequirements(): DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference;
    putPasswordRequirements(value: DynamicSecretSqlDatabaseConfigurationPasswordRequirements): void;
    resetPasswordRequirements(): void;
    get passwordRequirementsInput(): any;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
    private _renewStatement?;
    get renewStatement(): string;
    set renewStatement(value: string);
    resetRenewStatement(): void;
    get renewStatementInput(): string;
    private _revocationStatement?;
    get revocationStatement(): string;
    set revocationStatement(value: string);
    get revocationStatementInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface DynamicSecretSqlDatabaseMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#key DynamicSecretSqlDatabase#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#value DynamicSecretSqlDatabase#value}
    */
    readonly value: string;
}
export declare function dynamicSecretSqlDatabaseMetadataToTerraform(struct?: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable): any;
export declare function dynamicSecretSqlDatabaseMetadataToHclTerraform(struct?: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable): any;
export declare class DynamicSecretSqlDatabaseMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretSqlDatabaseMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class DynamicSecretSqlDatabaseMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretSqlDatabaseMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database}
*/
export declare class DynamicSecretSqlDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_dynamic_secret_sql_database";
    /**
    * Generates CDKTF code for importing a DynamicSecretSqlDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretSqlDatabase to import
    * @param importFromId The id of the existing DynamicSecretSqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretSqlDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretSqlDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: DynamicSecretSqlDatabaseConfig);
    private _configuration;
    get configuration(): DynamicSecretSqlDatabaseConfigurationOutputReference;
    putConfiguration(value: DynamicSecretSqlDatabaseConfiguration): void;
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
    get metadata(): DynamicSecretSqlDatabaseMetadataList;
    putMetadata(value: DynamicSecretSqlDatabaseMetadata[] | cdktf.IResolvable): void;
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
