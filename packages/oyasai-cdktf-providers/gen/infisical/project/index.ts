// https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audit log retention in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#audit_log_retention_days Project#audit_log_retention_days}
  */
  readonly auditLogRetentionDays?: number;
  /**
  * The description of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Whether the project has delete protection, defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#has_delete_protection Project#has_delete_protection}
  */
  readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
  /**
  * The ID of the KMS secret manager key to use for the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#kms_secret_manager_key_id Project#kms_secret_manager_key_id}
  */
  readonly kmsSecretManagerKeyId?: string;
  /**
  * The name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Whether to create default environments for the project (dev, staging, prod), defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#should_create_default_envs Project#should_create_default_envs}
  */
  readonly shouldCreateDefaultEnvs?: boolean | cdktf.IResolvable;
  /**
  * The slug of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#slug Project#slug}
  */
  readonly slug: string;
  /**
  * The name of the template to use for the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#template_name Project#template_name}
  */
  readonly templateName?: string;
  /**
  * The type of the project. Supported values: secret-manager, cert-manager, kms. Defaults to 'secret-manager'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#type Project#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project infisical_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.15/docs/resources/project infisical_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogRetentionDays = config.auditLogRetentionDays;
    this._description = config.description;
    this._hasDeleteProtection = config.hasDeleteProtection;
    this._kmsSecretManagerKeyId = config.kmsSecretManagerKeyId;
    this._name = config.name;
    this._shouldCreateDefaultEnvs = config.shouldCreateDefaultEnvs;
    this._slug = config.slug;
    this._templateName = config.templateName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_retention_days - computed: true, optional: true, required: false
  private _auditLogRetentionDays?: number; 
  public get auditLogRetentionDays() {
    return this.getNumberAttribute('audit_log_retention_days');
  }
  public set auditLogRetentionDays(value: number) {
    this._auditLogRetentionDays = value;
  }
  public resetAuditLogRetentionDays() {
    this._auditLogRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogRetentionDaysInput() {
    return this._auditLogRetentionDays;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // has_delete_protection - computed: true, optional: true, required: false
  private _hasDeleteProtection?: boolean | cdktf.IResolvable; 
  public get hasDeleteProtection() {
    return this.getBooleanAttribute('has_delete_protection');
  }
  public set hasDeleteProtection(value: boolean | cdktf.IResolvable) {
    this._hasDeleteProtection = value;
  }
  public resetHasDeleteProtection() {
    this._hasDeleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDeleteProtectionInput() {
    return this._hasDeleteProtection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_secret_manager_key_id - computed: true, optional: true, required: false
  private _kmsSecretManagerKeyId?: string; 
  public get kmsSecretManagerKeyId() {
    return this.getStringAttribute('kms_secret_manager_key_id');
  }
  public set kmsSecretManagerKeyId(value: string) {
    this._kmsSecretManagerKeyId = value;
  }
  public resetKmsSecretManagerKeyId() {
    this._kmsSecretManagerKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsSecretManagerKeyIdInput() {
    return this._kmsSecretManagerKeyId;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // should_create_default_envs - computed: false, optional: true, required: false
  private _shouldCreateDefaultEnvs?: boolean | cdktf.IResolvable; 
  public get shouldCreateDefaultEnvs() {
    return this.getBooleanAttribute('should_create_default_envs');
  }
  public set shouldCreateDefaultEnvs(value: boolean | cdktf.IResolvable) {
    this._shouldCreateDefaultEnvs = value;
  }
  public resetShouldCreateDefaultEnvs() {
    this._shouldCreateDefaultEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCreateDefaultEnvsInput() {
    return this._shouldCreateDefaultEnvs;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_log_retention_days: cdktf.numberToTerraform(this._auditLogRetentionDays),
      description: cdktf.stringToTerraform(this._description),
      has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
      kms_secret_manager_key_id: cdktf.stringToTerraform(this._kmsSecretManagerKeyId),
      name: cdktf.stringToTerraform(this._name),
      should_create_default_envs: cdktf.booleanToTerraform(this._shouldCreateDefaultEnvs),
      slug: cdktf.stringToTerraform(this._slug),
      template_name: cdktf.stringToTerraform(this._templateName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_log_retention_days: {
        value: cdktf.numberToHclTerraform(this._auditLogRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_delete_protection: {
        value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_secret_manager_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsSecretManagerKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_create_default_envs: {
        value: cdktf.booleanToHclTerraform(this._shouldCreateDefaultEnvs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
