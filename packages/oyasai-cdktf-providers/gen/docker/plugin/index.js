// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function pluginGrantPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.value),
    };
}
export function pluginGrantPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.value),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PluginGrantPermissionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return cdktf.Fn.tolist(this.getListAttribute('value'));
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class PluginGrantPermissionsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new PluginGrantPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin}
*/
export class Plugin extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_plugin";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Plugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Plugin to import
    * @param importFromId The id of the existing Plugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Plugin to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_plugin", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/plugin docker_plugin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PluginConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_plugin',
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
        this._alias = config.alias;
        this._enableTimeout = config.enableTimeout;
        this._enabled = config.enabled;
        this._env = config.env;
        this._forceDestroy = config.forceDestroy;
        this._forceDisable = config.forceDisable;
        this._grantAllPermissions = config.grantAllPermissions;
        this._id = config.id;
        this._name = config.name;
        this._grantPermissions.internalValue = config.grantPermissions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alias - computed: true, optional: true, required: false
    _alias;
    get alias() {
        return this.getStringAttribute('alias');
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // enable_timeout - computed: false, optional: true, required: false
    _enableTimeout;
    get enableTimeout() {
        return this.getNumberAttribute('enable_timeout');
    }
    set enableTimeout(value) {
        this._enableTimeout = value;
    }
    resetEnableTimeout() {
        this._enableTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableTimeoutInput() {
        return this._enableTimeout;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // env - computed: true, optional: true, required: false
    _env;
    get env() {
        return cdktf.Fn.tolist(this.getListAttribute('env'));
    }
    set env(value) {
        this._env = value;
    }
    resetEnv() {
        this._env = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get envInput() {
        return this._env;
    }
    // force_destroy - computed: false, optional: true, required: false
    _forceDestroy;
    get forceDestroy() {
        return this.getBooleanAttribute('force_destroy');
    }
    set forceDestroy(value) {
        this._forceDestroy = value;
    }
    resetForceDestroy() {
        this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDestroyInput() {
        return this._forceDestroy;
    }
    // force_disable - computed: false, optional: true, required: false
    _forceDisable;
    get forceDisable() {
        return this.getBooleanAttribute('force_disable');
    }
    set forceDisable(value) {
        this._forceDisable = value;
    }
    resetForceDisable() {
        this._forceDisable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDisableInput() {
        return this._forceDisable;
    }
    // grant_all_permissions - computed: false, optional: true, required: false
    _grantAllPermissions;
    get grantAllPermissions() {
        return this.getBooleanAttribute('grant_all_permissions');
    }
    set grantAllPermissions(value) {
        this._grantAllPermissions = value;
    }
    resetGrantAllPermissions() {
        this._grantAllPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantAllPermissionsInput() {
        return this._grantAllPermissions;
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
    // plugin_reference - computed: true, optional: false, required: false
    get pluginReference() {
        return this.getStringAttribute('plugin_reference');
    }
    // grant_permissions - computed: false, optional: true, required: false
    _grantPermissions = new PluginGrantPermissionsList(this, "grant_permissions", true);
    get grantPermissions() {
        return this._grantPermissions;
    }
    putGrantPermissions(value) {
        this._grantPermissions.internalValue = value;
    }
    resetGrantPermissions() {
        this._grantPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantPermissionsInput() {
        return this._grantPermissions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            enable_timeout: cdktf.numberToTerraform(this._enableTimeout),
            enabled: cdktf.booleanToTerraform(this._enabled),
            env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            force_disable: cdktf.booleanToTerraform(this._forceDisable),
            grant_all_permissions: cdktf.booleanToTerraform(this._grantAllPermissions),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            grant_permissions: cdktf.listMapper(pluginGrantPermissionsToTerraform, true)(this._grantPermissions.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_timeout: {
                value: cdktf.numberToHclTerraform(this._enableTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            env: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            force_destroy: {
                value: cdktf.booleanToHclTerraform(this._forceDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_disable: {
                value: cdktf.booleanToHclTerraform(this._forceDisable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            grant_all_permissions: {
                value: cdktf.booleanToHclTerraform(this._grantAllPermissions),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            grant_permissions: {
                value: cdktf.listMapperHcl(pluginGrantPermissionsToHclTerraform, true)(this._grantPermissions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "PluginGrantPermissionsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
