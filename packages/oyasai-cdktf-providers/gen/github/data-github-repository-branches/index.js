// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubRepositoryBranchesBranchesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryBranchesBranchesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryBranchesBranchesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // protected - computed: true, optional: false, required: false
    get protected() {
        return this.getBooleanAttribute('protected');
    }
}
export class DataGithubRepositoryBranchesBranchesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataGithubRepositoryBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches github_repository_branches}
*/
export class DataGithubRepositoryBranches extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_branches";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryBranches resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryBranches to import
    * @param importFromId The id of the existing DataGithubRepositoryBranches that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryBranches to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_branches", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches github_repository_branches} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryBranchesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_branches',
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
        this._onlyNonProtectedBranches = config.onlyNonProtectedBranches;
        this._onlyProtectedBranches = config.onlyProtectedBranches;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // branches - computed: true, optional: false, required: false
    _branches = new DataGithubRepositoryBranchesBranchesList(this, "branches", false);
    get branches() {
        return this._branches;
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
    // only_non_protected_branches - computed: false, optional: true, required: false
    _onlyNonProtectedBranches;
    get onlyNonProtectedBranches() {
        return this.getBooleanAttribute('only_non_protected_branches');
    }
    set onlyNonProtectedBranches(value) {
        this._onlyNonProtectedBranches = value;
    }
    resetOnlyNonProtectedBranches() {
        this._onlyNonProtectedBranches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onlyNonProtectedBranchesInput() {
        return this._onlyNonProtectedBranches;
    }
    // only_protected_branches - computed: false, optional: true, required: false
    _onlyProtectedBranches;
    get onlyProtectedBranches() {
        return this.getBooleanAttribute('only_protected_branches');
    }
    set onlyProtectedBranches(value) {
        this._onlyProtectedBranches = value;
    }
    resetOnlyProtectedBranches() {
        this._onlyProtectedBranches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onlyProtectedBranchesInput() {
        return this._onlyProtectedBranches;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            only_non_protected_branches: cdktf.booleanToTerraform(this._onlyNonProtectedBranches),
            only_protected_branches: cdktf.booleanToTerraform(this._onlyProtectedBranches),
            repository: cdktf.stringToTerraform(this._repository),
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
            only_non_protected_branches: {
                value: cdktf.booleanToHclTerraform(this._onlyNonProtectedBranches),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            only_protected_branches: {
                value: cdktf.booleanToHclTerraform(this._onlyProtectedBranches),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
