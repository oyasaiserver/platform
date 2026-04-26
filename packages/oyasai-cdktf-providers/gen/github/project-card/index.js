// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card}
*/
export class ProjectCard extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_project_card";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectCard resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectCard to import
    * @param importFromId The id of the existing ProjectCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectCard to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_project_card", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/project_card github_project_card} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectCardConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_project_card',
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
        this._columnId = config.columnId;
        this._contentId = config.contentId;
        this._contentType = config.contentType;
        this._id = config.id;
        this._note = config.note;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // card_id - computed: true, optional: false, required: false
    get cardId() {
        return this.getNumberAttribute('card_id');
    }
    // column_id - computed: false, optional: false, required: true
    _columnId;
    get columnId() {
        return this.getStringAttribute('column_id');
    }
    set columnId(value) {
        this._columnId = value;
    }
    // Temporarily expose input value. Use with caution.
    get columnIdInput() {
        return this._columnId;
    }
    // content_id - computed: false, optional: true, required: false
    _contentId;
    get contentId() {
        return this.getNumberAttribute('content_id');
    }
    set contentId(value) {
        this._contentId = value;
    }
    resetContentId() {
        this._contentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentIdInput() {
        return this._contentId;
    }
    // content_type - computed: false, optional: true, required: false
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
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
    // note - computed: false, optional: true, required: false
    _note;
    get note() {
        return this.getStringAttribute('note');
    }
    set note(value) {
        this._note = value;
    }
    resetNote() {
        this._note = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noteInput() {
        return this._note;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            column_id: cdktf.stringToTerraform(this._columnId),
            content_id: cdktf.numberToTerraform(this._contentId),
            content_type: cdktf.stringToTerraform(this._contentType),
            id: cdktf.stringToTerraform(this._id),
            note: cdktf.stringToTerraform(this._note),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            column_id: {
                value: cdktf.stringToHclTerraform(this._columnId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_id: {
                value: cdktf.numberToHclTerraform(this._contentId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            content_type: {
                value: cdktf.stringToHclTerraform(this._contentType),
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
            note: {
                value: cdktf.stringToHclTerraform(this._note),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
