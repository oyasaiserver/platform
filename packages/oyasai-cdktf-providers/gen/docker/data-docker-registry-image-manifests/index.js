// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataDockerRegistryImageManifestsManifestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataDockerRegistryImageManifestsManifestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataDockerRegistryImageManifestsManifestsOutputReference extends cdktf.ComplexObject {
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
    // architecture - computed: true, optional: false, required: false
    get architecture() {
        return this.getStringAttribute('architecture');
    }
    // media_type - computed: true, optional: false, required: false
    get mediaType() {
        return this.getStringAttribute('media_type');
    }
    // os - computed: true, optional: false, required: false
    get os() {
        return this.getStringAttribute('os');
    }
    // sha256_digest - computed: true, optional: false, required: false
    get sha256Digest() {
        return this.getStringAttribute('sha256_digest');
    }
}
export class DataDockerRegistryImageManifestsManifestsList extends cdktf.ComplexList {
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
        return new DataDockerRegistryImageManifestsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataDockerRegistryImageManifestsAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
export function dataDockerRegistryImageManifestsAuthConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataDockerRegistryImageManifestsAuthConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._address = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._address = value.address;
            this._password = value.password;
            this._username = value.username;
        }
    }
    // address - computed: false, optional: false, required: true
    _address;
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    // password - computed: false, optional: true, required: false
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // username - computed: false, optional: true, required: false
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests}
*/
export class DataDockerRegistryImageManifests extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_registry_image_manifests";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageManifests to import
    * @param importFromId The id of the existing DataDockerRegistryImageManifests that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_manifests", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageManifestsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_registry_image_manifests',
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
        this._insecureSkipVerify = config.insecureSkipVerify;
        this._name = config.name;
        this._authConfig.internalValue = config.authConfig;
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
    // insecure_skip_verify - computed: false, optional: true, required: false
    _insecureSkipVerify;
    get insecureSkipVerify() {
        return this.getBooleanAttribute('insecure_skip_verify');
    }
    set insecureSkipVerify(value) {
        this._insecureSkipVerify = value;
    }
    resetInsecureSkipVerify() {
        this._insecureSkipVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureSkipVerifyInput() {
        return this._insecureSkipVerify;
    }
    // manifests - computed: true, optional: false, required: false
    _manifests = new DataDockerRegistryImageManifestsManifestsList(this, "manifests", true);
    get manifests() {
        return this._manifests;
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
    // auth_config - computed: false, optional: true, required: false
    _authConfig = new DataDockerRegistryImageManifestsAuthConfigOutputReference(this, "auth_config");
    get authConfig() {
        return this._authConfig;
    }
    putAuthConfig(value) {
        this._authConfig.internalValue = value;
    }
    resetAuthConfig() {
        this._authConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authConfigInput() {
        return this._authConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
            auth_config: dataDockerRegistryImageManifestsAuthConfigToTerraform(this._authConfig.internalValue),
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
            insecure_skip_verify: {
                value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_config: {
                value: dataDockerRegistryImageManifestsAuthConfigToHclTerraform(this._authConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DataDockerRegistryImageManifestsAuthConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
