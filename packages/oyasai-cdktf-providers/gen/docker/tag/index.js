// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag}
*/
export class Tag extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_tag";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Tag to import
    * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Tag to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_tag", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TagConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_tag',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
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
        this._sourceImage = config.sourceImage;
        this._tagTriggers = config.tagTriggers;
        this._targetImage = config.targetImage;
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
    // source_image - computed: false, optional: false, required: true
    _sourceImage;
    get sourceImage() {
        return this.getStringAttribute('source_image');
    }
    set sourceImage(value) {
        this._sourceImage = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceImageInput() {
        return this._sourceImage;
    }
    // source_image_id - computed: true, optional: false, required: false
    get sourceImageId() {
        return this.getStringAttribute('source_image_id');
    }
    // tag_triggers - computed: false, optional: true, required: false
    _tagTriggers;
    get tagTriggers() {
        return cdktf.Fn.tolist(this.getListAttribute('tag_triggers'));
    }
    set tagTriggers(value) {
        this._tagTriggers = value;
    }
    resetTagTriggers() {
        this._tagTriggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagTriggersInput() {
        return this._tagTriggers;
    }
    // target_image - computed: false, optional: false, required: true
    _targetImage;
    get targetImage() {
        return this.getStringAttribute('target_image');
    }
    set targetImage(value) {
        this._targetImage = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetImageInput() {
        return this._targetImage;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            source_image: cdktf.stringToTerraform(this._sourceImage),
            tag_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagTriggers),
            target_image: cdktf.stringToTerraform(this._targetImage),
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
            source_image: {
                value: cdktf.stringToHclTerraform(this._sourceImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_triggers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagTriggers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            target_image: {
                value: cdktf.stringToHclTerraform(this._targetImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
