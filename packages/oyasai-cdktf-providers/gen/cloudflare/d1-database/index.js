// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function d1DatabaseReadReplicationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function d1DatabaseReadReplicationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class D1DatabaseReadReplicationOutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }
    // mode - computed: false, optional: false, required: true
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database}
*/
export class D1Database extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_d1_database";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a D1Database resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the D1Database to import
    * @param importFromId The id of the existing D1Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the D1Database to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_d1_database", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/d1_database cloudflare_d1_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options D1DatabaseConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_d1_database',
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
        this._accountId = config.accountId;
        this._jurisdiction = config.jurisdiction;
        this._name = config.name;
        this._primaryLocationHint = config.primaryLocationHint;
        this._readReplication.internalValue = config.readReplication;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // file_size - computed: true, optional: false, required: false
    get fileSize() {
        return this.getNumberAttribute('file_size');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // jurisdiction - computed: false, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
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
    // num_tables - computed: true, optional: false, required: false
    get numTables() {
        return this.getNumberAttribute('num_tables');
    }
    // primary_location_hint - computed: false, optional: true, required: false
    _primaryLocationHint;
    get primaryLocationHint() {
        return this.getStringAttribute('primary_location_hint');
    }
    set primaryLocationHint(value) {
        this._primaryLocationHint = value;
    }
    resetPrimaryLocationHint() {
        this._primaryLocationHint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get primaryLocationHintInput() {
        return this._primaryLocationHint;
    }
    // read_replication - computed: false, optional: true, required: false
    _readReplication = new D1DatabaseReadReplicationOutputReference(this, "read_replication");
    get readReplication() {
        return this._readReplication;
    }
    putReadReplication(value) {
        this._readReplication.internalValue = value;
    }
    resetReadReplication() {
        this._readReplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readReplicationInput() {
        return this._readReplication.internalValue;
    }
    // uuid - computed: true, optional: false, required: false
    get uuid() {
        return this.getStringAttribute('uuid');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            name: cdktf.stringToTerraform(this._name),
            primary_location_hint: cdktf.stringToTerraform(this._primaryLocationHint),
            read_replication: d1DatabaseReadReplicationToTerraform(this._readReplication.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            primary_location_hint: {
                value: cdktf.stringToHclTerraform(this._primaryLocationHint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_replication: {
                value: d1DatabaseReadReplicationToHclTerraform(this._readReplication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "D1DatabaseReadReplication",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
