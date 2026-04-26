// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function registryImageAuthConfigToTerraform(struct) {
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
export function registryImageAuthConfigToHclTerraform(struct) {
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
export class RegistryImageAuthConfigOutputReference extends cdktf.ComplexObject {
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
export function registryImageBuildAuthConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth: cdktf.stringToTerraform(struct.auth),
        email: cdktf.stringToTerraform(struct.email),
        host_name: cdktf.stringToTerraform(struct.hostName),
        identity_token: cdktf.stringToTerraform(struct.identityToken),
        password: cdktf.stringToTerraform(struct.password),
        registry_token: cdktf.stringToTerraform(struct.registryToken),
        server_address: cdktf.stringToTerraform(struct.serverAddress),
        user_name: cdktf.stringToTerraform(struct.userName),
    };
}
export function registryImageBuildAuthConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth: {
            value: cdktf.stringToHclTerraform(struct.auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email: {
            value: cdktf.stringToHclTerraform(struct.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_name: {
            value: cdktf.stringToHclTerraform(struct.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_token: {
            value: cdktf.stringToHclTerraform(struct.identityToken),
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
        registry_token: {
            value: cdktf.stringToHclTerraform(struct.registryToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_address: {
            value: cdktf.stringToHclTerraform(struct.serverAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktf.stringToHclTerraform(struct.userName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RegistryImageBuildAuthConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._auth !== undefined) {
            hasAnyValues = true;
            internalValueResult.auth = this._auth;
        }
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._identityToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityToken = this._identityToken;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._registryToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.registryToken = this._registryToken;
        }
        if (this._serverAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverAddress = this._serverAddress;
        }
        if (this._userName !== undefined) {
            hasAnyValues = true;
            internalValueResult.userName = this._userName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auth = undefined;
            this._email = undefined;
            this._hostName = undefined;
            this._identityToken = undefined;
            this._password = undefined;
            this._registryToken = undefined;
            this._serverAddress = undefined;
            this._userName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auth = value.auth;
            this._email = value.email;
            this._hostName = value.hostName;
            this._identityToken = value.identityToken;
            this._password = value.password;
            this._registryToken = value.registryToken;
            this._serverAddress = value.serverAddress;
            this._userName = value.userName;
        }
    }
    // auth - computed: false, optional: true, required: false
    _auth;
    get auth() {
        return this.getStringAttribute('auth');
    }
    set auth(value) {
        this._auth = value;
    }
    resetAuth() {
        this._auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authInput() {
        return this._auth;
    }
    // email - computed: false, optional: true, required: false
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // host_name - computed: false, optional: false, required: true
    _hostName;
    get hostName() {
        return this.getStringAttribute('host_name');
    }
    set hostName(value) {
        this._hostName = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostNameInput() {
        return this._hostName;
    }
    // identity_token - computed: false, optional: true, required: false
    _identityToken;
    get identityToken() {
        return this.getStringAttribute('identity_token');
    }
    set identityToken(value) {
        this._identityToken = value;
    }
    resetIdentityToken() {
        this._identityToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityTokenInput() {
        return this._identityToken;
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
    // registry_token - computed: false, optional: true, required: false
    _registryToken;
    get registryToken() {
        return this.getStringAttribute('registry_token');
    }
    set registryToken(value) {
        this._registryToken = value;
    }
    resetRegistryToken() {
        this._registryToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryTokenInput() {
        return this._registryToken;
    }
    // server_address - computed: false, optional: true, required: false
    _serverAddress;
    get serverAddress() {
        return this.getStringAttribute('server_address');
    }
    set serverAddress(value) {
        this._serverAddress = value;
    }
    resetServerAddress() {
        this._serverAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverAddressInput() {
        return this._serverAddress;
    }
    // user_name - computed: false, optional: true, required: false
    _userName;
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
    }
}
export class RegistryImageBuildAuthConfigList extends cdktf.ComplexList {
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
        return new RegistryImageBuildAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function registryImageBuildSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        env: cdktf.stringToTerraform(struct.env),
        id: cdktf.stringToTerraform(struct.id),
        src: cdktf.stringToTerraform(struct.src),
    };
}
export function registryImageBuildSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        env: {
            value: cdktf.stringToHclTerraform(struct.env),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        src: {
            value: cdktf.stringToHclTerraform(struct.src),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RegistryImageBuildSecretsOutputReference extends cdktf.ComplexObject {
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
        if (this._env !== undefined) {
            hasAnyValues = true;
            internalValueResult.env = this._env;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._src !== undefined) {
            hasAnyValues = true;
            internalValueResult.src = this._src;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._env = undefined;
            this._id = undefined;
            this._src = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._env = value.env;
            this._id = value.id;
            this._src = value.src;
        }
    }
    // env - computed: false, optional: true, required: false
    _env;
    get env() {
        return this.getStringAttribute('env');
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
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // src - computed: false, optional: true, required: false
    _src;
    get src() {
        return this.getStringAttribute('src');
    }
    set src(value) {
        this._src = value;
    }
    resetSrc() {
        this._src = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get srcInput() {
        return this._src;
    }
}
export class RegistryImageBuildSecretsList extends cdktf.ComplexList {
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
        return new RegistryImageBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function registryImageBuildUlimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hard: cdktf.numberToTerraform(struct.hard),
        name: cdktf.stringToTerraform(struct.name),
        soft: cdktf.numberToTerraform(struct.soft),
    };
}
export function registryImageBuildUlimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        hard: {
            value: cdktf.numberToHclTerraform(struct.hard),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        soft: {
            value: cdktf.numberToHclTerraform(struct.soft),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RegistryImageBuildUlimitOutputReference extends cdktf.ComplexObject {
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
        if (this._hard !== undefined) {
            hasAnyValues = true;
            internalValueResult.hard = this._hard;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._soft !== undefined) {
            hasAnyValues = true;
            internalValueResult.soft = this._soft;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hard = undefined;
            this._name = undefined;
            this._soft = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hard = value.hard;
            this._name = value.name;
            this._soft = value.soft;
        }
    }
    // hard - computed: false, optional: false, required: true
    _hard;
    get hard() {
        return this.getNumberAttribute('hard');
    }
    set hard(value) {
        this._hard = value;
    }
    // Temporarily expose input value. Use with caution.
    get hardInput() {
        return this._hard;
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
    // soft - computed: false, optional: false, required: true
    _soft;
    get soft() {
        return this.getNumberAttribute('soft');
    }
    set soft(value) {
        this._soft = value;
    }
    // Temporarily expose input value. Use with caution.
    get softInput() {
        return this._soft;
    }
}
export class RegistryImageBuildUlimitList extends cdktf.ComplexList {
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
        return new RegistryImageBuildUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function registryImageBuildToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        additional_contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.additionalContexts),
        build_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct.buildArgs),
        build_id: cdktf.stringToTerraform(struct.buildId),
        build_log_file: cdktf.stringToTerraform(struct.buildLogFile),
        builder: cdktf.stringToTerraform(struct.builder),
        cache_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cacheFrom),
        cache_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cacheTo),
        cgroup_parent: cdktf.stringToTerraform(struct.cgroupParent),
        context: cdktf.stringToTerraform(struct.context),
        cpu_period: cdktf.numberToTerraform(struct.cpuPeriod),
        cpu_quota: cdktf.numberToTerraform(struct.cpuQuota),
        cpu_set_cpus: cdktf.stringToTerraform(struct.cpuSetCpus),
        cpu_set_mems: cdktf.stringToTerraform(struct.cpuSetMems),
        cpu_shares: cdktf.numberToTerraform(struct.cpuShares),
        dockerfile: cdktf.stringToTerraform(struct.dockerfile),
        extra_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extraHosts),
        force_remove: cdktf.booleanToTerraform(struct.forceRemove),
        isolation: cdktf.stringToTerraform(struct.isolation),
        label: cdktf.hashMapper(cdktf.stringToTerraform)(struct.label),
        labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.labels),
        memory: cdktf.numberToTerraform(struct.memory),
        memory_swap: cdktf.numberToTerraform(struct.memorySwap),
        network_mode: cdktf.stringToTerraform(struct.networkMode),
        no_cache: cdktf.booleanToTerraform(struct.noCache),
        platform: cdktf.stringToTerraform(struct.platform),
        pull_parent: cdktf.booleanToTerraform(struct.pullParent),
        remote_context: cdktf.stringToTerraform(struct.remoteContext),
        remove: cdktf.booleanToTerraform(struct.remove),
        security_opt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityOpt),
        session_id: cdktf.stringToTerraform(struct.sessionId),
        shm_size: cdktf.numberToTerraform(struct.shmSize),
        squash: cdktf.booleanToTerraform(struct.squash),
        suppress_output: cdktf.booleanToTerraform(struct.suppressOutput),
        tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tag),
        target: cdktf.stringToTerraform(struct.target),
        use_legacy_builder: cdktf.booleanToTerraform(struct.useLegacyBuilder),
        version: cdktf.stringToTerraform(struct.version),
        auth_config: cdktf.listMapper(registryImageBuildAuthConfigToTerraform, true)(struct.authConfig),
        secrets: cdktf.listMapper(registryImageBuildSecretsToTerraform, true)(struct.secrets),
        ulimit: cdktf.listMapper(registryImageBuildUlimitToTerraform, true)(struct.ulimit),
    };
}
export function registryImageBuildToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        additional_contexts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.additionalContexts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        build_args: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.buildArgs),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        build_id: {
            value: cdktf.stringToHclTerraform(struct.buildId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        build_log_file: {
            value: cdktf.stringToHclTerraform(struct.buildLogFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        builder: {
            value: cdktf.stringToHclTerraform(struct.builder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_from: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cacheFrom),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cache_to: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cacheTo),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cgroup_parent: {
            value: cdktf.stringToHclTerraform(struct.cgroupParent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        context: {
            value: cdktf.stringToHclTerraform(struct.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_period: {
            value: cdktf.numberToHclTerraform(struct.cpuPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_quota: {
            value: cdktf.numberToHclTerraform(struct.cpuQuota),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cpu_set_cpus: {
            value: cdktf.stringToHclTerraform(struct.cpuSetCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_set_mems: {
            value: cdktf.stringToHclTerraform(struct.cpuSetMems),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_shares: {
            value: cdktf.numberToHclTerraform(struct.cpuShares),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dockerfile: {
            value: cdktf.stringToHclTerraform(struct.dockerfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extra_hosts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extraHosts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        force_remove: {
            value: cdktf.booleanToHclTerraform(struct.forceRemove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        isolation: {
            value: cdktf.stringToHclTerraform(struct.isolation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.label),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        labels: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        memory: {
            value: cdktf.numberToHclTerraform(struct.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_swap: {
            value: cdktf.numberToHclTerraform(struct.memorySwap),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_mode: {
            value: cdktf.stringToHclTerraform(struct.networkMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        no_cache: {
            value: cdktf.booleanToHclTerraform(struct.noCache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        platform: {
            value: cdktf.stringToHclTerraform(struct.platform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pull_parent: {
            value: cdktf.booleanToHclTerraform(struct.pullParent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remote_context: {
            value: cdktf.stringToHclTerraform(struct.remoteContext),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        remove: {
            value: cdktf.booleanToHclTerraform(struct.remove),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_opt: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityOpt),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        session_id: {
            value: cdktf.stringToHclTerraform(struct.sessionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shm_size: {
            value: cdktf.numberToHclTerraform(struct.shmSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        squash: {
            value: cdktf.booleanToHclTerraform(struct.squash),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        suppress_output: {
            value: cdktf.booleanToHclTerraform(struct.suppressOutput),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_legacy_builder: {
            value: cdktf.booleanToHclTerraform(struct.useLegacyBuilder),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_config: {
            value: cdktf.listMapperHcl(registryImageBuildAuthConfigToHclTerraform, true)(struct.authConfig),
            isBlock: true,
            type: "list",
            storageClassType: "RegistryImageBuildAuthConfigList",
        },
        secrets: {
            value: cdktf.listMapperHcl(registryImageBuildSecretsToHclTerraform, true)(struct.secrets),
            isBlock: true,
            type: "list",
            storageClassType: "RegistryImageBuildSecretsList",
        },
        ulimit: {
            value: cdktf.listMapperHcl(registryImageBuildUlimitToHclTerraform, true)(struct.ulimit),
            isBlock: true,
            type: "list",
            storageClassType: "RegistryImageBuildUlimitList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RegistryImageBuildOutputReference extends cdktf.ComplexObject {
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
        if (this._additionalContexts !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalContexts = this._additionalContexts;
        }
        if (this._buildArgs !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildArgs = this._buildArgs;
        }
        if (this._buildId !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildId = this._buildId;
        }
        if (this._buildLogFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildLogFile = this._buildLogFile;
        }
        if (this._builder !== undefined) {
            hasAnyValues = true;
            internalValueResult.builder = this._builder;
        }
        if (this._cacheFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheFrom = this._cacheFrom;
        }
        if (this._cacheTo !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheTo = this._cacheTo;
        }
        if (this._cgroupParent !== undefined) {
            hasAnyValues = true;
            internalValueResult.cgroupParent = this._cgroupParent;
        }
        if (this._context !== undefined) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._cpuPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuPeriod = this._cpuPeriod;
        }
        if (this._cpuQuota !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuQuota = this._cpuQuota;
        }
        if (this._cpuSetCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuSetCpus = this._cpuSetCpus;
        }
        if (this._cpuSetMems !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuSetMems = this._cpuSetMems;
        }
        if (this._cpuShares !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuShares = this._cpuShares;
        }
        if (this._dockerfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerfile = this._dockerfile;
        }
        if (this._extraHosts !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraHosts = this._extraHosts;
        }
        if (this._forceRemove !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceRemove = this._forceRemove;
        }
        if (this._isolation !== undefined) {
            hasAnyValues = true;
            internalValueResult.isolation = this._isolation;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._labels !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._memorySwap !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySwap = this._memorySwap;
        }
        if (this._networkMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkMode = this._networkMode;
        }
        if (this._noCache !== undefined) {
            hasAnyValues = true;
            internalValueResult.noCache = this._noCache;
        }
        if (this._platform !== undefined) {
            hasAnyValues = true;
            internalValueResult.platform = this._platform;
        }
        if (this._pullParent !== undefined) {
            hasAnyValues = true;
            internalValueResult.pullParent = this._pullParent;
        }
        if (this._remoteContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteContext = this._remoteContext;
        }
        if (this._remove !== undefined) {
            hasAnyValues = true;
            internalValueResult.remove = this._remove;
        }
        if (this._securityOpt !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityOpt = this._securityOpt;
        }
        if (this._sessionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionId = this._sessionId;
        }
        if (this._shmSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.shmSize = this._shmSize;
        }
        if (this._squash !== undefined) {
            hasAnyValues = true;
            internalValueResult.squash = this._squash;
        }
        if (this._suppressOutput !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressOutput = this._suppressOutput;
        }
        if (this._tag !== undefined) {
            hasAnyValues = true;
            internalValueResult.tag = this._tag;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._useLegacyBuilder !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLegacyBuilder = this._useLegacyBuilder;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        if (this._authConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authConfig = this._authConfig?.internalValue;
        }
        if (this._secrets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secrets = this._secrets?.internalValue;
        }
        if (this._ulimit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ulimit = this._ulimit?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._additionalContexts = undefined;
            this._buildArgs = undefined;
            this._buildId = undefined;
            this._buildLogFile = undefined;
            this._builder = undefined;
            this._cacheFrom = undefined;
            this._cacheTo = undefined;
            this._cgroupParent = undefined;
            this._context = undefined;
            this._cpuPeriod = undefined;
            this._cpuQuota = undefined;
            this._cpuSetCpus = undefined;
            this._cpuSetMems = undefined;
            this._cpuShares = undefined;
            this._dockerfile = undefined;
            this._extraHosts = undefined;
            this._forceRemove = undefined;
            this._isolation = undefined;
            this._label = undefined;
            this._labels = undefined;
            this._memory = undefined;
            this._memorySwap = undefined;
            this._networkMode = undefined;
            this._noCache = undefined;
            this._platform = undefined;
            this._pullParent = undefined;
            this._remoteContext = undefined;
            this._remove = undefined;
            this._securityOpt = undefined;
            this._sessionId = undefined;
            this._shmSize = undefined;
            this._squash = undefined;
            this._suppressOutput = undefined;
            this._tag = undefined;
            this._target = undefined;
            this._useLegacyBuilder = undefined;
            this._version = undefined;
            this._authConfig.internalValue = undefined;
            this._secrets.internalValue = undefined;
            this._ulimit.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._additionalContexts = value.additionalContexts;
            this._buildArgs = value.buildArgs;
            this._buildId = value.buildId;
            this._buildLogFile = value.buildLogFile;
            this._builder = value.builder;
            this._cacheFrom = value.cacheFrom;
            this._cacheTo = value.cacheTo;
            this._cgroupParent = value.cgroupParent;
            this._context = value.context;
            this._cpuPeriod = value.cpuPeriod;
            this._cpuQuota = value.cpuQuota;
            this._cpuSetCpus = value.cpuSetCpus;
            this._cpuSetMems = value.cpuSetMems;
            this._cpuShares = value.cpuShares;
            this._dockerfile = value.dockerfile;
            this._extraHosts = value.extraHosts;
            this._forceRemove = value.forceRemove;
            this._isolation = value.isolation;
            this._label = value.label;
            this._labels = value.labels;
            this._memory = value.memory;
            this._memorySwap = value.memorySwap;
            this._networkMode = value.networkMode;
            this._noCache = value.noCache;
            this._platform = value.platform;
            this._pullParent = value.pullParent;
            this._remoteContext = value.remoteContext;
            this._remove = value.remove;
            this._securityOpt = value.securityOpt;
            this._sessionId = value.sessionId;
            this._shmSize = value.shmSize;
            this._squash = value.squash;
            this._suppressOutput = value.suppressOutput;
            this._tag = value.tag;
            this._target = value.target;
            this._useLegacyBuilder = value.useLegacyBuilder;
            this._version = value.version;
            this._authConfig.internalValue = value.authConfig;
            this._secrets.internalValue = value.secrets;
            this._ulimit.internalValue = value.ulimit;
        }
    }
    // additional_contexts - computed: false, optional: true, required: false
    _additionalContexts;
    get additionalContexts() {
        return this.getListAttribute('additional_contexts');
    }
    set additionalContexts(value) {
        this._additionalContexts = value;
    }
    resetAdditionalContexts() {
        this._additionalContexts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get additionalContextsInput() {
        return this._additionalContexts;
    }
    // build_args - computed: false, optional: true, required: false
    _buildArgs;
    get buildArgs() {
        return this.getStringMapAttribute('build_args');
    }
    set buildArgs(value) {
        this._buildArgs = value;
    }
    resetBuildArgs() {
        this._buildArgs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildArgsInput() {
        return this._buildArgs;
    }
    // build_id - computed: false, optional: true, required: false
    _buildId;
    get buildId() {
        return this.getStringAttribute('build_id');
    }
    set buildId(value) {
        this._buildId = value;
    }
    resetBuildId() {
        this._buildId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildIdInput() {
        return this._buildId;
    }
    // build_log_file - computed: false, optional: true, required: false
    _buildLogFile;
    get buildLogFile() {
        return this.getStringAttribute('build_log_file');
    }
    set buildLogFile(value) {
        this._buildLogFile = value;
    }
    resetBuildLogFile() {
        this._buildLogFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildLogFileInput() {
        return this._buildLogFile;
    }
    // builder - computed: false, optional: true, required: false
    _builder;
    get builder() {
        return this.getStringAttribute('builder');
    }
    set builder(value) {
        this._builder = value;
    }
    resetBuilder() {
        this._builder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get builderInput() {
        return this._builder;
    }
    // cache_from - computed: false, optional: true, required: false
    _cacheFrom;
    get cacheFrom() {
        return this.getListAttribute('cache_from');
    }
    set cacheFrom(value) {
        this._cacheFrom = value;
    }
    resetCacheFrom() {
        this._cacheFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheFromInput() {
        return this._cacheFrom;
    }
    // cache_to - computed: false, optional: true, required: false
    _cacheTo;
    get cacheTo() {
        return this.getListAttribute('cache_to');
    }
    set cacheTo(value) {
        this._cacheTo = value;
    }
    resetCacheTo() {
        this._cacheTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheToInput() {
        return this._cacheTo;
    }
    // cgroup_parent - computed: false, optional: true, required: false
    _cgroupParent;
    get cgroupParent() {
        return this.getStringAttribute('cgroup_parent');
    }
    set cgroupParent(value) {
        this._cgroupParent = value;
    }
    resetCgroupParent() {
        this._cgroupParent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cgroupParentInput() {
        return this._cgroupParent;
    }
    // context - computed: false, optional: false, required: true
    _context;
    get context() {
        return this.getStringAttribute('context');
    }
    set context(value) {
        this._context = value;
    }
    // Temporarily expose input value. Use with caution.
    get contextInput() {
        return this._context;
    }
    // cpu_period - computed: false, optional: true, required: false
    _cpuPeriod;
    get cpuPeriod() {
        return this.getNumberAttribute('cpu_period');
    }
    set cpuPeriod(value) {
        this._cpuPeriod = value;
    }
    resetCpuPeriod() {
        this._cpuPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuPeriodInput() {
        return this._cpuPeriod;
    }
    // cpu_quota - computed: false, optional: true, required: false
    _cpuQuota;
    get cpuQuota() {
        return this.getNumberAttribute('cpu_quota');
    }
    set cpuQuota(value) {
        this._cpuQuota = value;
    }
    resetCpuQuota() {
        this._cpuQuota = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuQuotaInput() {
        return this._cpuQuota;
    }
    // cpu_set_cpus - computed: false, optional: true, required: false
    _cpuSetCpus;
    get cpuSetCpus() {
        return this.getStringAttribute('cpu_set_cpus');
    }
    set cpuSetCpus(value) {
        this._cpuSetCpus = value;
    }
    resetCpuSetCpus() {
        this._cpuSetCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetCpusInput() {
        return this._cpuSetCpus;
    }
    // cpu_set_mems - computed: false, optional: true, required: false
    _cpuSetMems;
    get cpuSetMems() {
        return this.getStringAttribute('cpu_set_mems');
    }
    set cpuSetMems(value) {
        this._cpuSetMems = value;
    }
    resetCpuSetMems() {
        this._cpuSetMems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSetMemsInput() {
        return this._cpuSetMems;
    }
    // cpu_shares - computed: false, optional: true, required: false
    _cpuShares;
    get cpuShares() {
        return this.getNumberAttribute('cpu_shares');
    }
    set cpuShares(value) {
        this._cpuShares = value;
    }
    resetCpuShares() {
        this._cpuShares = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuSharesInput() {
        return this._cpuShares;
    }
    // dockerfile - computed: false, optional: true, required: false
    _dockerfile;
    get dockerfile() {
        return this.getStringAttribute('dockerfile');
    }
    set dockerfile(value) {
        this._dockerfile = value;
    }
    resetDockerfile() {
        this._dockerfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dockerfileInput() {
        return this._dockerfile;
    }
    // extra_hosts - computed: false, optional: true, required: false
    _extraHosts;
    get extraHosts() {
        return this.getListAttribute('extra_hosts');
    }
    set extraHosts(value) {
        this._extraHosts = value;
    }
    resetExtraHosts() {
        this._extraHosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extraHostsInput() {
        return this._extraHosts;
    }
    // force_remove - computed: false, optional: true, required: false
    _forceRemove;
    get forceRemove() {
        return this.getBooleanAttribute('force_remove');
    }
    set forceRemove(value) {
        this._forceRemove = value;
    }
    resetForceRemove() {
        this._forceRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceRemoveInput() {
        return this._forceRemove;
    }
    // isolation - computed: false, optional: true, required: false
    _isolation;
    get isolation() {
        return this.getStringAttribute('isolation');
    }
    set isolation(value) {
        this._isolation = value;
    }
    resetIsolation() {
        this._isolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isolationInput() {
        return this._isolation;
    }
    // label - computed: false, optional: true, required: false
    _label;
    get label() {
        return this.getStringMapAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // labels - computed: false, optional: true, required: false
    _labels;
    get labels() {
        return this.getStringMapAttribute('labels');
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
    // memory - computed: false, optional: true, required: false
    _memory;
    get memory() {
        return this.getNumberAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
    // memory_swap - computed: false, optional: true, required: false
    _memorySwap;
    get memorySwap() {
        return this.getNumberAttribute('memory_swap');
    }
    set memorySwap(value) {
        this._memorySwap = value;
    }
    resetMemorySwap() {
        this._memorySwap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memorySwapInput() {
        return this._memorySwap;
    }
    // network_mode - computed: false, optional: true, required: false
    _networkMode;
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    set networkMode(value) {
        this._networkMode = value;
    }
    resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkModeInput() {
        return this._networkMode;
    }
    // no_cache - computed: false, optional: true, required: false
    _noCache;
    get noCache() {
        return this.getBooleanAttribute('no_cache');
    }
    set noCache(value) {
        this._noCache = value;
    }
    resetNoCache() {
        this._noCache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCacheInput() {
        return this._noCache;
    }
    // platform - computed: false, optional: true, required: false
    _platform;
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    // pull_parent - computed: false, optional: true, required: false
    _pullParent;
    get pullParent() {
        return this.getBooleanAttribute('pull_parent');
    }
    set pullParent(value) {
        this._pullParent = value;
    }
    resetPullParent() {
        this._pullParent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullParentInput() {
        return this._pullParent;
    }
    // remote_context - computed: false, optional: true, required: false
    _remoteContext;
    get remoteContext() {
        return this.getStringAttribute('remote_context');
    }
    set remoteContext(value) {
        this._remoteContext = value;
    }
    resetRemoteContext() {
        this._remoteContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteContextInput() {
        return this._remoteContext;
    }
    // remove - computed: false, optional: true, required: false
    _remove;
    get remove() {
        return this.getBooleanAttribute('remove');
    }
    set remove(value) {
        this._remove = value;
    }
    resetRemove() {
        this._remove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get removeInput() {
        return this._remove;
    }
    // security_opt - computed: false, optional: true, required: false
    _securityOpt;
    get securityOpt() {
        return this.getListAttribute('security_opt');
    }
    set securityOpt(value) {
        this._securityOpt = value;
    }
    resetSecurityOpt() {
        this._securityOpt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityOptInput() {
        return this._securityOpt;
    }
    // session_id - computed: false, optional: true, required: false
    _sessionId;
    get sessionId() {
        return this.getStringAttribute('session_id');
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    resetSessionId() {
        this._sessionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionIdInput() {
        return this._sessionId;
    }
    // shm_size - computed: false, optional: true, required: false
    _shmSize;
    get shmSize() {
        return this.getNumberAttribute('shm_size');
    }
    set shmSize(value) {
        this._shmSize = value;
    }
    resetShmSize() {
        this._shmSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shmSizeInput() {
        return this._shmSize;
    }
    // squash - computed: false, optional: true, required: false
    _squash;
    get squash() {
        return this.getBooleanAttribute('squash');
    }
    set squash(value) {
        this._squash = value;
    }
    resetSquash() {
        this._squash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get squashInput() {
        return this._squash;
    }
    // suppress_output - computed: false, optional: true, required: false
    _suppressOutput;
    get suppressOutput() {
        return this.getBooleanAttribute('suppress_output');
    }
    set suppressOutput(value) {
        this._suppressOutput = value;
    }
    resetSuppressOutput() {
        this._suppressOutput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suppressOutputInput() {
        return this._suppressOutput;
    }
    // tag - computed: false, optional: true, required: false
    _tag;
    get tag() {
        return this.getListAttribute('tag');
    }
    set tag(value) {
        this._tag = value;
    }
    resetTag() {
        this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag;
    }
    // target - computed: false, optional: true, required: false
    _target;
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    // use_legacy_builder - computed: false, optional: true, required: false
    _useLegacyBuilder;
    get useLegacyBuilder() {
        return this.getBooleanAttribute('use_legacy_builder');
    }
    set useLegacyBuilder(value) {
        this._useLegacyBuilder = value;
    }
    resetUseLegacyBuilder() {
        this._useLegacyBuilder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useLegacyBuilderInput() {
        return this._useLegacyBuilder;
    }
    // version - computed: false, optional: true, required: false
    _version;
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
    // auth_config - computed: false, optional: true, required: false
    _authConfig = new RegistryImageBuildAuthConfigList(this, "auth_config", false);
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
    // secrets - computed: false, optional: true, required: false
    _secrets = new RegistryImageBuildSecretsList(this, "secrets", false);
    get secrets() {
        return this._secrets;
    }
    putSecrets(value) {
        this._secrets.internalValue = value;
    }
    resetSecrets() {
        this._secrets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretsInput() {
        return this._secrets.internalValue;
    }
    // ulimit - computed: false, optional: true, required: false
    _ulimit = new RegistryImageBuildUlimitList(this, "ulimit", false);
    get ulimit() {
        return this._ulimit;
    }
    putUlimit(value) {
        this._ulimit.internalValue = value;
    }
    resetUlimit() {
        this._ulimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ulimitInput() {
        return this._ulimit.internalValue;
    }
}
export function registryImageTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export function registryImageTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RegistryImageTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image docker_registry_image}
*/
export class RegistryImage extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_registry_image";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegistryImage to import
    * @param importFromId The id of the existing RegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegistryImage to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/registry_image docker_registry_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegistryImageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_registry_image',
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
        this._keepRemotely = config.keepRemotely;
        this._name = config.name;
        this._triggers = config.triggers;
        this._authConfig.internalValue = config.authConfig;
        this._build.internalValue = config.buildAttribute;
        this._timeouts.internalValue = config.timeouts;
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
    // keep_remotely - computed: false, optional: true, required: false
    _keepRemotely;
    get keepRemotely() {
        return this.getBooleanAttribute('keep_remotely');
    }
    set keepRemotely(value) {
        this._keepRemotely = value;
    }
    resetKeepRemotely() {
        this._keepRemotely = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepRemotelyInput() {
        return this._keepRemotely;
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
    // sha256_digest - computed: true, optional: false, required: false
    get sha256Digest() {
        return this.getStringAttribute('sha256_digest');
    }
    // triggers - computed: false, optional: true, required: false
    _triggers;
    get triggers() {
        return this.getStringMapAttribute('triggers');
    }
    set triggers(value) {
        this._triggers = value;
    }
    resetTriggers() {
        this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get triggersInput() {
        return this._triggers;
    }
    // auth_config - computed: false, optional: true, required: false
    _authConfig = new RegistryImageAuthConfigOutputReference(this, "auth_config");
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
    // build - computed: false, optional: true, required: false
    _build = new RegistryImageBuildOutputReference(this, "build");
    get buildAttribute() {
        return this._build;
    }
    putBuildAttribute(value) {
        this._build.internalValue = value;
    }
    resetBuildAttribute() {
        this._build.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildAttributeInput() {
        return this._build.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new RegistryImageTimeoutsOutputReference(this, "timeouts");
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            keep_remotely: cdktf.booleanToTerraform(this._keepRemotely),
            name: cdktf.stringToTerraform(this._name),
            triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
            auth_config: registryImageAuthConfigToTerraform(this._authConfig.internalValue),
            build: registryImageBuildToTerraform(this._build.internalValue),
            timeouts: registryImageTimeoutsToTerraform(this._timeouts.internalValue),
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
            keep_remotely: {
                value: cdktf.booleanToHclTerraform(this._keepRemotely),
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
            triggers: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            auth_config: {
                value: registryImageAuthConfigToHclTerraform(this._authConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RegistryImageAuthConfigList",
            },
            build: {
                value: registryImageBuildToHclTerraform(this._build.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RegistryImageBuildList",
            },
            timeouts: {
                value: registryImageTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RegistryImageTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
