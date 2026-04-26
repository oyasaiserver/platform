// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryPagesSourceAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        branch: cdktf.stringToTerraform(struct.branch),
        path: cdktf.stringToTerraform(struct.path),
    };
}
export function repositoryPagesSourceAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        branch: {
            value: cdktf.stringToHclTerraform(struct.branch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryPagesSourceAOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._branch !== undefined) {
            hasAnyValues = true;
            internalValueResult.branch = this._branch;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._branch = undefined;
            this._path = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._branch = value.branch;
            this._path = value.path;
        }
    }
    // branch - computed: false, optional: false, required: true
    _branch;
    get branch() {
        return this.getStringAttribute('branch');
    }
    set branch(value) {
        this._branch = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchInput() {
        return this._branch;
    }
    // path - computed: false, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages}
*/
export class RepositoryPagesA extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_pages";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryPagesA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPagesA to import
    * @param importFromId The id of the existing RepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPagesA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pages", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPagesAConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_pages',
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
        this._buildType = config.buildType;
        this._cname = config.cname;
        this._httpsEnforced = config.httpsEnforced;
        this._id = config.id;
        this._public = config.public;
        this._repository = config.repository;
        this._source.internalValue = config.source;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // api_url - computed: true, optional: false, required: false
    get apiUrl() {
        return this.getStringAttribute('api_url');
    }
    // build_status - computed: true, optional: false, required: false
    get buildStatus() {
        return this.getStringAttribute('build_status');
    }
    // build_type - computed: false, optional: true, required: false
    _buildType;
    get buildType() {
        return this.getStringAttribute('build_type');
    }
    set buildType(value) {
        this._buildType = value;
    }
    resetBuildType() {
        this._buildType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildTypeInput() {
        return this._buildType;
    }
    // cname - computed: false, optional: true, required: false
    _cname;
    get cname() {
        return this.getStringAttribute('cname');
    }
    set cname(value) {
        this._cname = value;
    }
    resetCname() {
        this._cname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cnameInput() {
        return this._cname;
    }
    // custom_404 - computed: true, optional: false, required: false
    get custom404() {
        return this.getBooleanAttribute('custom_404');
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
    }
    // https_enforced - computed: true, optional: true, required: false
    _httpsEnforced;
    get httpsEnforced() {
        return this.getBooleanAttribute('https_enforced');
    }
    set httpsEnforced(value) {
        this._httpsEnforced = value;
    }
    resetHttpsEnforced() {
        this._httpsEnforced = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpsEnforcedInput() {
        return this._httpsEnforced;
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
    // public - computed: true, optional: true, required: false
    _public;
    get public() {
        return this.getBooleanAttribute('public');
    }
    set public(value) {
        this._public = value;
    }
    resetPublic() {
        this._public = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicInput() {
        return this._public;
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
    // repository_id - computed: true, optional: false, required: false
    get repositoryId() {
        return this.getNumberAttribute('repository_id');
    }
    // source - computed: false, optional: true, required: false
    _source = new RepositoryPagesSourceAOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            build_type: cdktf.stringToTerraform(this._buildType),
            cname: cdktf.stringToTerraform(this._cname),
            https_enforced: cdktf.booleanToTerraform(this._httpsEnforced),
            id: cdktf.stringToTerraform(this._id),
            public: cdktf.booleanToTerraform(this._public),
            repository: cdktf.stringToTerraform(this._repository),
            source: repositoryPagesSourceAToTerraform(this._source.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            build_type: {
                value: cdktf.stringToHclTerraform(this._buildType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cname: {
                value: cdktf.stringToHclTerraform(this._cname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            https_enforced: {
                value: cdktf.booleanToHclTerraform(this._httpsEnforced),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public: {
                value: cdktf.booleanToHclTerraform(this._public),
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
            source: {
                value: repositoryPagesSourceAToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryPagesSourceAList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
