// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function snippetsMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        main_module: cdktf.stringToTerraform(struct.mainModule),
    };
}
export function snippetsMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        main_module: {
            value: cdktf.stringToHclTerraform(struct.mainModule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SnippetsMetadataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mainModule !== undefined) {
            hasAnyValues = true;
            internalValueResult.mainModule = this._mainModule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mainModule = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mainModule = value.mainModule;
        }
    }
    // main_module - computed: false, optional: false, required: true
    _mainModule;
    get mainModule() {
        return this.getStringAttribute('main_module');
    }
    set mainModule(value) {
        this._mainModule = value;
    }
    // Temporarily expose input value. Use with caution.
    get mainModuleInput() {
        return this._mainModule;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets}
*/
export class Snippets extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_snippets";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Snippets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Snippets to import
    * @param importFromId The id of the existing Snippets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Snippets to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippets", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_snippets',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._files = config.files;
        this._metadata.internalValue = config.metadata;
        this._snippetName = config.snippetName;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // files - computed: false, optional: false, required: true
    _files;
    get files() {
        return this.getListAttribute('files');
    }
    set files(value) {
        this._files = value;
    }
    // Temporarily expose input value. Use with caution.
    get filesInput() {
        return this._files;
    }
    // metadata - computed: false, optional: false, required: true
    _metadata = new SnippetsMetadataOutputReference(this, "metadata");
    get metadata() {
        return this._metadata;
    }
    putMetadata(value) {
        this._metadata.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata.internalValue;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // snippet_name - computed: false, optional: false, required: true
    _snippetName;
    get snippetName() {
        return this.getStringAttribute('snippet_name');
    }
    set snippetName(value) {
        this._snippetName = value;
    }
    // Temporarily expose input value. Use with caution.
    get snippetNameInput() {
        return this._snippetName;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
            metadata: snippetsMetadataToTerraform(this._metadata.internalValue),
            snippet_name: cdktf.stringToTerraform(this._snippetName),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            files: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            metadata: {
                value: snippetsMetadataToHclTerraform(this._metadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SnippetsMetadata",
            },
            snippet_name: {
                value: cdktf.stringToHclTerraform(this._snippetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
