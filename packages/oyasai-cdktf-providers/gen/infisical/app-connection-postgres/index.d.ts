import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionPostgresConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the PostgreSQL App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#credentials AppConnectionPostgres#credentials}
    */
    readonly credentials: AppConnectionPostgresCredentials;
    /**
    * An optional description for the PostgreSQL App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#description AppConnectionPostgres#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with PostgreSQL. Possible values are: username-and-password
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#method AppConnectionPostgres#method}
    */
    readonly method: string;
    /**
    * The name of the PostgreSQL App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#name AppConnectionPostgres#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#project_id AppConnectionPostgres#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionPostgresCredentials {
    /**
    * The name of the database to connect to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#database AppConnectionPostgres#database}
    */
    readonly database: string;
    /**
    * The hostname of the database server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#host AppConnectionPostgres#host}
    */
    readonly host: string;
    /**
    * The password to connect to the database with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#password AppConnectionPostgres#password}
    */
    readonly password: string;
    /**
    * The port number of the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#port AppConnectionPostgres#port}
    */
    readonly port?: number;
    /**
    * The SSL certificate to use for connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#ssl_certificate AppConnectionPostgres#ssl_certificate}
    */
    readonly sslCertificate?: string;
    /**
    * Whether or not to use SSL when connecting to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#ssl_enabled AppConnectionPostgres#ssl_enabled}
    */
    readonly sslEnabled?: boolean | cdktf.IResolvable;
    /**
    * Whether or not to reject unauthorized SSL certificates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#ssl_reject_unauthorized AppConnectionPostgres#ssl_reject_unauthorized}
    */
    readonly sslRejectUnauthorized?: boolean | cdktf.IResolvable;
    /**
    * The username to connect to the database with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#username AppConnectionPostgres#username}
    */
    readonly username: string;
}
export declare function appConnectionPostgresCredentialsToTerraform(struct?: AppConnectionPostgresCredentials | cdktf.IResolvable): any;
export declare function appConnectionPostgresCredentialsToHclTerraform(struct?: AppConnectionPostgresCredentials | cdktf.IResolvable): any;
export declare class AppConnectionPostgresCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionPostgresCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionPostgresCredentials | cdktf.IResolvable | undefined);
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
    private _sslCertificate?;
    get sslCertificate(): string;
    set sslCertificate(value: string);
    resetSslCertificate(): void;
    get sslCertificateInput(): string;
    private _sslEnabled?;
    get sslEnabled(): boolean | cdktf.IResolvable;
    set sslEnabled(value: boolean | cdktf.IResolvable);
    resetSslEnabled(): void;
    get sslEnabledInput(): any;
    private _sslRejectUnauthorized?;
    get sslRejectUnauthorized(): boolean | cdktf.IResolvable;
    set sslRejectUnauthorized(value: boolean | cdktf.IResolvable);
    resetSslRejectUnauthorized(): void;
    get sslRejectUnauthorizedInput(): any;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres infisical_app_connection_postgres}
*/
export declare class AppConnectionPostgres extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_postgres";
    /**
    * Generates CDKTF code for importing a AppConnectionPostgres resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionPostgres to import
    * @param importFromId The id of the existing AppConnectionPostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionPostgres to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres infisical_app_connection_postgres} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionPostgresConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionPostgresConfig);
    private _credentials;
    get credentials(): AppConnectionPostgresCredentialsOutputReference;
    putCredentials(value: AppConnectionPostgresCredentials): void;
    get credentialsInput(): any;
    get credentialsHash(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
