// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project}
*/
export class Project extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_project";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Project to import
    * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Project to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project infisical_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_project',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
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
    _auditLogRetentionDays;
    get auditLogRetentionDays() {
        return this.getNumberAttribute('audit_log_retention_days');
    }
    set auditLogRetentionDays(value) {
        this._auditLogRetentionDays = value;
    }
    resetAuditLogRetentionDays() {
        this._auditLogRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get auditLogRetentionDaysInput() {
        return this._auditLogRetentionDays;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // has_delete_protection - computed: true, optional: true, required: false
    _hasDeleteProtection;
    get hasDeleteProtection() {
        return this.getBooleanAttribute('has_delete_protection');
    }
    set hasDeleteProtection(value) {
        this._hasDeleteProtection = value;
    }
    resetHasDeleteProtection() {
        this._hasDeleteProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasDeleteProtectionInput() {
        return this._hasDeleteProtection;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kms_secret_manager_key_id - computed: true, optional: true, required: false
    _kmsSecretManagerKeyId;
    get kmsSecretManagerKeyId() {
        return this.getStringAttribute('kms_secret_manager_key_id');
    }
    set kmsSecretManagerKeyId(value) {
        this._kmsSecretManagerKeyId = value;
    }
    resetKmsSecretManagerKeyId() {
        this._kmsSecretManagerKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsSecretManagerKeyIdInput() {
        return this._kmsSecretManagerKeyId;
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // should_create_default_envs - computed: false, optional: true, required: false
    _shouldCreateDefaultEnvs;
    get shouldCreateDefaultEnvs() {
        return this.getBooleanAttribute('should_create_default_envs');
    }
    set shouldCreateDefaultEnvs(value) {
        this._shouldCreateDefaultEnvs = value;
    }
    resetShouldCreateDefaultEnvs() {
        this._shouldCreateDefaultEnvs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shouldCreateDefaultEnvsInput() {
        return this._shouldCreateDefaultEnvs;
    }
    // slug - computed: false, optional: false, required: true
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
    }
    // template_name - computed: false, optional: true, required: false
    _templateName;
    get templateName() {
        return this.getStringAttribute('template_name');
    }
    set templateName(value) {
        this._templateName = value;
    }
    resetTemplateName() {
        this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get templateNameInput() {
        return this._templateName;
    }
    // type - computed: true, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    synthesizeHclAttributes() {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
