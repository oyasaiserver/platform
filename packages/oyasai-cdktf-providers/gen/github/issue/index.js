// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue}
*/
export class Issue extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_issue";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Issue to import
    * @param importFromId The id of the existing Issue that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Issue to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_issue", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/issue github_issue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IssueConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_issue',
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
        this._assignees = config.assignees;
        this._body = config.body;
        this._id = config.id;
        this._labels = config.labels;
        this._milestoneNumber = config.milestoneNumber;
        this._repository = config.repository;
        this._title = config.title;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // assignees - computed: false, optional: true, required: false
    _assignees;
    get assignees() {
        return cdktf.Fn.tolist(this.getListAttribute('assignees'));
    }
    set assignees(value) {
        this._assignees = value;
    }
    resetAssignees() {
        this._assignees = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assigneesInput() {
        return this._assignees;
    }
    // body - computed: false, optional: true, required: false
    _body;
    get body() {
        return this.getStringAttribute('body');
    }
    set body(value) {
        this._body = value;
    }
    resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
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
    // issue_id - computed: true, optional: false, required: false
    get issueId() {
        return this.getNumberAttribute('issue_id');
    }
    // labels - computed: false, optional: true, required: false
    _labels;
    get labels() {
        return cdktf.Fn.tolist(this.getListAttribute('labels'));
    }
    set labels(value) {
        this._labels = value;
    }
    resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels;
    }
    // milestone_number - computed: false, optional: true, required: false
    _milestoneNumber;
    get milestoneNumber() {
        return this.getNumberAttribute('milestone_number');
    }
    set milestoneNumber(value) {
        this._milestoneNumber = value;
    }
    resetMilestoneNumber() {
        this._milestoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get milestoneNumberInput() {
        return this._milestoneNumber;
    }
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
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
    // title - computed: false, optional: false, required: true
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            assignees: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignees),
            body: cdktf.stringToTerraform(this._body),
            id: cdktf.stringToTerraform(this._id),
            labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
            milestone_number: cdktf.numberToTerraform(this._milestoneNumber),
            repository: cdktf.stringToTerraform(this._repository),
            title: cdktf.stringToTerraform(this._title),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            assignees: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignees),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            body: {
                value: cdktf.stringToHclTerraform(this._body),
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
            labels: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            milestone_number: {
                value: cdktf.numberToHclTerraform(this._milestoneNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
