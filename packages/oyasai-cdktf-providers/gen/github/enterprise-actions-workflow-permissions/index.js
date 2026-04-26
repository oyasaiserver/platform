// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions}
*/
export class EnterpriseActionsWorkflowPermissions extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_enterprise_actions_workflow_permissions";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsWorkflowPermissions to import
    * @param importFromId The id of the existing EnterpriseActionsWorkflowPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsWorkflowPermissions to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_workflow_permissions", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsWorkflowPermissionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_enterprise_actions_workflow_permissions',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._canApprovePullRequestReviews = config.canApprovePullRequestReviews;
        this._defaultWorkflowPermissions = config.defaultWorkflowPermissions;
        this._enterpriseSlug = config.enterpriseSlug;
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // can_approve_pull_request_reviews - computed: false, optional: true, required: false
    _canApprovePullRequestReviews;
    get canApprovePullRequestReviews() {
        return this.getBooleanAttribute('can_approve_pull_request_reviews');
    }
    set canApprovePullRequestReviews(value) {
        this._canApprovePullRequestReviews = value;
    }
    resetCanApprovePullRequestReviews() {
        this._canApprovePullRequestReviews = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get canApprovePullRequestReviewsInput() {
        return this._canApprovePullRequestReviews;
    }
    // default_workflow_permissions - computed: false, optional: true, required: false
    _defaultWorkflowPermissions;
    get defaultWorkflowPermissions() {
        return this.getStringAttribute('default_workflow_permissions');
    }
    set defaultWorkflowPermissions(value) {
        this._defaultWorkflowPermissions = value;
    }
    resetDefaultWorkflowPermissions() {
        this._defaultWorkflowPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultWorkflowPermissionsInput() {
        return this._defaultWorkflowPermissions;
    }
    // enterprise_slug - computed: false, optional: false, required: true
    _enterpriseSlug;
    get enterpriseSlug() {
        return this.getStringAttribute('enterprise_slug');
    }
    set enterpriseSlug(value) {
        this._enterpriseSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get enterpriseSlugInput() {
        return this._enterpriseSlug;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            can_approve_pull_request_reviews: cdktf.booleanToTerraform(this._canApprovePullRequestReviews),
            default_workflow_permissions: cdktf.stringToTerraform(this._defaultWorkflowPermissions),
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            can_approve_pull_request_reviews: {
                value: cdktf.booleanToHclTerraform(this._canApprovePullRequestReviews),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_workflow_permissions: {
                value: cdktf.stringToHclTerraform(this._defaultWorkflowPermissions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enterprise_slug: {
                value: cdktf.stringToHclTerraform(this._enterpriseSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
