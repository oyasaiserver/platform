import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionGcpConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the GCP App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#credentials AppConnectionGcp#credentials}
    */
    readonly credentials: AppConnectionGcpCredentials;
    /**
    * An optional description for the GCP App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#description AppConnectionGcp#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with GCP. Possible values are: service-account-impersonation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#method AppConnectionGcp#method}
    */
    readonly method: string;
    /**
    * The name of the GCP App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#name AppConnectionGcp#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#project_id AppConnectionGcp#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionGcpCredentials {
    /**
    * The service account email to connect with GCP. The service account ID (the part of the email before '@') must be suffixed with the first two sections of your organization ID e.g. service-account-df92581a-0fe9@my-project.iam.gserviceaccount.com. For more details, refer to the documentation here https://infisical.com/docs/integrations/app-connections/gcp#configure-service-account-for-infisical
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#service_account_email AppConnectionGcp#service_account_email}
    */
    readonly serviceAccountEmail?: string;
}
export declare function appConnectionGcpCredentialsToTerraform(struct?: AppConnectionGcpCredentials | cdktf.IResolvable): any;
export declare function appConnectionGcpCredentialsToHclTerraform(struct?: AppConnectionGcpCredentials | cdktf.IResolvable): any;
export declare class AppConnectionGcpCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionGcpCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionGcpCredentials | cdktf.IResolvable | undefined);
    private _serviceAccountEmail?;
    get serviceAccountEmail(): string;
    set serviceAccountEmail(value: string);
    resetServiceAccountEmail(): void;
    get serviceAccountEmailInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp infisical_app_connection_gcp}
*/
export declare class AppConnectionGcp extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_gcp";
    /**
    * Generates CDKTF code for importing a AppConnectionGcp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionGcp to import
    * @param importFromId The id of the existing AppConnectionGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionGcp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gcp infisical_app_connection_gcp} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionGcpConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionGcpConfig);
    private _credentials;
    get credentials(): AppConnectionGcpCredentialsOutputReference;
    putCredentials(value: AppConnectionGcpCredentials): void;
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
