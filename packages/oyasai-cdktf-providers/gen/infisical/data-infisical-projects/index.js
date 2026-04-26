// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataInfisicalProjectsEnvironmentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataInfisicalProjectsEnvironmentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataInfisicalProjectsEnvironmentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // slug - computed: true, optional: false, required: false
    get slug() {
        return this.getStringAttribute('slug');
    }
}
export class DataInfisicalProjectsEnvironmentsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new DataInfisicalProjectsEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects}
*/
export class DataInfisicalProjects extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_projects";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalProjects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalProjects to import
    * @param importFromId The id of the existing DataInfisicalProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalProjects to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_projects", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalProjectsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_projects',
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
        this._slug = config.slug;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_capitalization - computed: true, optional: false, required: false
    get autoCapitalization() {
        return this.getBooleanAttribute('auto_capitalization');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // environments - computed: true, optional: false, required: false
    _environments = new DataInfisicalProjectsEnvironmentsMap(this, "environments");
    get environments() {
        return this._environments;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // org_id - computed: true, optional: false, required: false
    get orgId() {
        return this.getStringAttribute('org_id');
    }
    // slug - computed: false, optional: false, required: true
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // upgrade_status - computed: true, optional: false, required: false
    get upgradeStatus() {
        return this.getStringAttribute('upgrade_status');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            slug: cdktf.stringToTerraform(this._slug),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
