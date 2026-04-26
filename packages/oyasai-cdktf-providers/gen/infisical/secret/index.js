// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretSecretReminderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        note: cdktf.stringToTerraform(struct.note),
        repeat_days: cdktf.numberToTerraform(struct.repeatDays),
    };
}
export function secretSecretReminderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        note: {
            value: cdktf.stringToHclTerraform(struct.note),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repeat_days: {
            value: cdktf.numberToHclTerraform(struct.repeatDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSecretReminderOutputReference extends cdktf.ComplexObject {
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
        if (this._note !== undefined) {
            hasAnyValues = true;
            internalValueResult.note = this._note;
        }
        if (this._repeatDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.repeatDays = this._repeatDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._note = undefined;
            this._repeatDays = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._note = value.note;
            this._repeatDays = value.repeatDays;
        }
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
    // repeat_days - computed: false, optional: false, required: true
    _repeatDays;
    get repeatDays() {
        return this.getNumberAttribute('repeat_days');
    }
    set repeatDays(value) {
        this._repeatDays = value;
    }
    // Temporarily expose input value. Use with caution.
    get repeatDaysInput() {
        return this._repeatDays;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret}
*/
export class Secret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Secret to import
    * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Secret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret infisical_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret',
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
        this._envSlug = config.envSlug;
        this._folderPath = config.folderPath;
        this._metadata = config.metadata;
        this._name = config.name;
        this._secretReminder.internalValue = config.secretReminder;
        this._tagIds = config.tagIds;
        this._value = config.value;
        this._valueWo = config.valueWo;
        this._valueWoVersion = config.valueWoVersion;
        this._workspaceId = config.workspaceId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // env_slug - computed: false, optional: false, required: true
    _envSlug;
    get envSlug() {
        return this.getStringAttribute('env_slug');
    }
    set envSlug(value) {
        this._envSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get envSlugInput() {
        return this._envSlug;
    }
    // folder_path - computed: false, optional: false, required: true
    _folderPath;
    get folderPath() {
        return this.getStringAttribute('folder_path');
    }
    set folderPath(value) {
        this._folderPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get folderPathInput() {
        return this._folderPath;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated - computed: true, optional: false, required: false
    get lastUpdated() {
        return this.getStringAttribute('last_updated');
    }
    // metadata - computed: false, optional: true, required: false
    _metadata;
    get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    set metadata(value) {
        this._metadata = value;
    }
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata;
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
    // secret_reminder - computed: false, optional: true, required: false
    _secretReminder = new SecretSecretReminderOutputReference(this, "secret_reminder");
    get secretReminder() {
        return this._secretReminder;
    }
    putSecretReminder(value) {
        this._secretReminder.internalValue = value;
    }
    resetSecretReminder() {
        this._secretReminder.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretReminderInput() {
        return this._secretReminder.internalValue;
    }
    // tag_ids - computed: false, optional: true, required: false
    _tagIds;
    get tagIds() {
        return this.getListAttribute('tag_ids');
    }
    set tagIds(value) {
        this._tagIds = value;
    }
    resetTagIds() {
        this._tagIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagIdsInput() {
        return this._tagIds;
    }
    // value - computed: false, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
    // value_wo - computed: false, optional: true, required: false
    _valueWo;
    get valueWo() {
        return this.getStringAttribute('value_wo');
    }
    set valueWo(value) {
        this._valueWo = value;
    }
    resetValueWo() {
        this._valueWo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueWoInput() {
        return this._valueWo;
    }
    // value_wo_version - computed: false, optional: true, required: false
    _valueWoVersion;
    get valueWoVersion() {
        return this.getNumberAttribute('value_wo_version');
    }
    set valueWoVersion(value) {
        this._valueWoVersion = value;
    }
    resetValueWoVersion() {
        this._valueWoVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueWoVersionInput() {
        return this._valueWoVersion;
    }
    // workspace_id - computed: true, optional: true, required: false
    _workspaceId;
    get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }
    set workspaceId(value) {
        this._workspaceId = value;
    }
    resetWorkspaceId() {
        this._workspaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceIdInput() {
        return this._workspaceId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            env_slug: cdktf.stringToTerraform(this._envSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
            name: cdktf.stringToTerraform(this._name),
            secret_reminder: secretSecretReminderToTerraform(this._secretReminder.internalValue),
            tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
            value: cdktf.stringToTerraform(this._value),
            value_wo: cdktf.stringToTerraform(this._valueWo),
            value_wo_version: cdktf.numberToTerraform(this._valueWoVersion),
            workspace_id: cdktf.stringToTerraform(this._workspaceId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            env_slug: {
                value: cdktf.stringToHclTerraform(this._envSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_reminder: {
                value: secretSecretReminderToHclTerraform(this._secretReminder.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSecretReminder",
            },
            tag_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_wo: {
                value: cdktf.stringToHclTerraform(this._valueWo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_wo_version: {
                value: cdktf.numberToHclTerraform(this._valueWoVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            workspace_id: {
                value: cdktf.stringToHclTerraform(this._workspaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
