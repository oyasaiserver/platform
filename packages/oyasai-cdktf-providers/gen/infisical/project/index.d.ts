import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The audit log retention in days
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#audit_log_retention_days Project#audit_log_retention_days}
    */
    readonly auditLogRetentionDays?: number;
    /**
    * The description of the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#description Project#description}
    */
    readonly description?: string;
    /**
    * Whether the project has delete protection, defaults to false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#has_delete_protection Project#has_delete_protection}
    */
    readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
    /**
    * The ID of the KMS secret manager key to use for the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#kms_secret_manager_key_id Project#kms_secret_manager_key_id}
    */
    readonly kmsSecretManagerKeyId?: string;
    /**
    * The name of the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#name Project#name}
    */
    readonly name: string;
    /**
    * Whether to create default environments for the project (dev, staging, prod), defaults to true
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#should_create_default_envs Project#should_create_default_envs}
    */
    readonly shouldCreateDefaultEnvs?: boolean | cdktf.IResolvable;
    /**
    * The slug of the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#slug Project#slug}
    */
    readonly slug: string;
    /**
    * The name of the template to use for the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#template_name Project#template_name}
    */
    readonly templateName?: string;
    /**
    * The type of the project. Supported values: secret-manager, cert-manager, kms. Defaults to 'secret-manager'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#type Project#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project}
*/
export declare class Project extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project";
    /**
    * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Project to import
    * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Project to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectConfig
    */
    constructor(scope: Construct, id: string, config: ProjectConfig);
    private _auditLogRetentionDays?;
    get auditLogRetentionDays(): number;
    set auditLogRetentionDays(value: number);
    resetAuditLogRetentionDays(): void;
    get auditLogRetentionDaysInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _hasDeleteProtection?;
    get hasDeleteProtection(): boolean | cdktf.IResolvable;
    set hasDeleteProtection(value: boolean | cdktf.IResolvable);
    resetHasDeleteProtection(): void;
    get hasDeleteProtectionInput(): any;
    get id(): any;
    private _kmsSecretManagerKeyId?;
    get kmsSecretManagerKeyId(): string;
    set kmsSecretManagerKeyId(value: string);
    resetKmsSecretManagerKeyId(): void;
    get kmsSecretManagerKeyIdInput(): string;
    get lastUpdated(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _shouldCreateDefaultEnvs?;
    get shouldCreateDefaultEnvs(): boolean | cdktf.IResolvable;
    set shouldCreateDefaultEnvs(value: boolean | cdktf.IResolvable);
    resetShouldCreateDefaultEnvs(): void;
    get shouldCreateDefaultEnvsInput(): any;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    resetTemplateName(): void;
    get templateNameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
