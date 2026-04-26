// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci}
*/
export class IntegrationCircleci extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_integration_circleci";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationCircleci resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationCircleci to import
    * @param importFromId The id of the existing IntegrationCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationCircleci to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_circleci", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationCircleciConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_integration_circleci',
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
        this._circleciOrgSlug = config.circleciOrgSlug;
        this._circleciProjectId = config.circleciProjectId;
        this._circleciToken = config.circleciToken;
        this._environment = config.environment;
        this._projectId = config.projectId;
        this._secretPath = config.secretPath;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // circleci_org_slug - computed: false, optional: false, required: true
    _circleciOrgSlug;
    get circleciOrgSlug() {
        return this.getStringAttribute('circleci_org_slug');
    }
    set circleciOrgSlug(value) {
        this._circleciOrgSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get circleciOrgSlugInput() {
        return this._circleciOrgSlug;
    }
    // circleci_project_id - computed: false, optional: false, required: true
    _circleciProjectId;
    get circleciProjectId() {
        return this.getStringAttribute('circleci_project_id');
    }
    set circleciProjectId(value) {
        this._circleciProjectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get circleciProjectIdInput() {
        return this._circleciProjectId;
    }
    // circleci_token - computed: false, optional: false, required: true
    _circleciToken;
    get circleciToken() {
        return this.getStringAttribute('circleci_token');
    }
    set circleciToken(value) {
        this._circleciToken = value;
    }
    // Temporarily expose input value. Use with caution.
    get circleciTokenInput() {
        return this._circleciToken;
    }
    // environment - computed: false, optional: false, required: true
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // integration_auth_id - computed: true, optional: false, required: false
    get integrationAuthId() {
        return this.getStringAttribute('integration_auth_id');
    }
    // integration_id - computed: true, optional: false, required: false
    get integrationId() {
        return this.getStringAttribute('integration_id');
    }
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // secret_path - computed: false, optional: false, required: true
    _secretPath;
    get secretPath() {
        return this.getStringAttribute('secret_path');
    }
    set secretPath(value) {
        this._secretPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretPathInput() {
        return this._secretPath;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            circleci_org_slug: cdktf.stringToTerraform(this._circleciOrgSlug),
            circleci_project_id: cdktf.stringToTerraform(this._circleciProjectId),
            circleci_token: cdktf.stringToTerraform(this._circleciToken),
            environment: cdktf.stringToTerraform(this._environment),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            circleci_org_slug: {
                value: cdktf.stringToHclTerraform(this._circleciOrgSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            circleci_project_id: {
                value: cdktf.stringToHclTerraform(this._circleciProjectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            circleci_token: {
                value: cdktf.stringToHclTerraform(this._circleciToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
