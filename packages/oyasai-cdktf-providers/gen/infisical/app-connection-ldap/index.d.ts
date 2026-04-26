import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionLdapConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the LDAP App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#credentials AppConnectionLdap#credentials}
    */
    readonly credentials: AppConnectionLdapCredentials;
    /**
    * An optional description for the LDAP App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#description AppConnectionLdap#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with LDAP. Possible values are: simple-bind
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#method AppConnectionLdap#method}
    */
    readonly method: string;
    /**
    * The name of the LDAP App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#name AppConnectionLdap#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#project_id AppConnectionLdap#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionLdapCredentials {
    /**
    * The Distinguished Name (DN) or User Principal Name (UPN) of the principal to bind with (e.g., 'CN=John,CN=Users,DC=example,DC=com').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#dn AppConnectionLdap#dn}
    */
    readonly dn: string;
    /**
    * The password to bind with for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#password AppConnectionLdap#password}
    */
    readonly password: string;
    /**
    * The LDAP provider (e.g., 'active-directory').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#provider AppConnectionLdap#provider}
    */
    readonly provider: string;
    /**
    * The SSL certificate (PEM format) to use for secure connection when using ldaps:// with a self-signed certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#ssl_certificate AppConnectionLdap#ssl_certificate}
    */
    readonly sslCertificate?: string;
    /**
    * Whether or not to reject unauthorized SSL certificates (true/false) when using ldaps://. Set to false only in test environments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#ssl_reject_unauthorized AppConnectionLdap#ssl_reject_unauthorized}
    */
    readonly sslRejectUnauthorized?: boolean | cdktf.IResolvable;
    /**
    * The LDAP server URL (e.g., 'ldap://example.com:389' or 'ldaps://example.com:636').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#url AppConnectionLdap#url}
    */
    readonly url: string;
}
export declare function appConnectionLdapCredentialsToTerraform(struct?: AppConnectionLdapCredentials | cdktf.IResolvable): any;
export declare function appConnectionLdapCredentialsToHclTerraform(struct?: AppConnectionLdapCredentials | cdktf.IResolvable): any;
export declare class AppConnectionLdapCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionLdapCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionLdapCredentials | cdktf.IResolvable | undefined);
    private _dn?;
    get dn(): string;
    set dn(value: string);
    get dnInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    get providerInput(): string;
    private _sslCertificate?;
    get sslCertificate(): string;
    set sslCertificate(value: string);
    resetSslCertificate(): void;
    get sslCertificateInput(): string;
    private _sslRejectUnauthorized?;
    get sslRejectUnauthorized(): boolean | cdktf.IResolvable;
    set sslRejectUnauthorized(value: boolean | cdktf.IResolvable);
    resetSslRejectUnauthorized(): void;
    get sslRejectUnauthorizedInput(): any;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap}
*/
export declare class AppConnectionLdap extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_ldap";
    /**
    * Generates CDKTF code for importing a AppConnectionLdap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionLdap to import
    * @param importFromId The id of the existing AppConnectionLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionLdap to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionLdapConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionLdapConfig);
    private _credentials;
    get credentials(): AppConnectionLdapCredentialsOutputReference;
    putCredentials(value: AppConnectionLdapCredentials): void;
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
