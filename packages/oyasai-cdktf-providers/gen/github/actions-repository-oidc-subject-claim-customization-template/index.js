// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}
*/
export class ActionsRepositoryOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_repository_oidc_subject_claim_customization_template";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import
    * @param importFromId The id of the existing ActionsRepositoryOidcSubjectClaimCustomizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_oidc_subject_claim_customization_template", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_repository_oidc_subject_claim_customization_template',
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
        this._id = config.id;
        this._includeClaimKeys = config.includeClaimKeys;
        this._repository = config.repository;
        this._useDefault = config.useDefault;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // include_claim_keys - computed: false, optional: true, required: false
    _includeClaimKeys;
    get includeClaimKeys() {
        return this.getListAttribute('include_claim_keys');
    }
    set includeClaimKeys(value) {
        this._includeClaimKeys = value;
    }
    resetIncludeClaimKeys() {
        this._includeClaimKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeClaimKeysInput() {
        return this._includeClaimKeys;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // use_default - computed: false, optional: false, required: true
    _useDefault;
    get useDefault() {
        return this.getBooleanAttribute('use_default');
    }
    set useDefault(value) {
        this._useDefault = value;
    }
    // Temporarily expose input value. Use with caution.
    get useDefaultInput() {
        return this._useDefault;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            include_claim_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeClaimKeys),
            repository: cdktf.stringToTerraform(this._repository),
            use_default: cdktf.booleanToTerraform(this._useDefault),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_claim_keys: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeClaimKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            use_default: {
                value: cdktf.booleanToHclTerraform(this._useDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
