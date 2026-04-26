// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function serviceAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        server_address: cdktf.stringToTerraform(struct.serverAddress),
        username: cdktf.stringToTerraform(struct.username),
    };
}
export function serviceAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
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
export class ServiceAuthOutputReference extends cdktf.ComplexObject {
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
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._serverAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverAddress = this._serverAddress;
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
            this._password = undefined;
            this._serverAddress = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._password = value.password;
            this._serverAddress = value.serverAddress;
            this._username = value.username;
        }
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
    // server_address - computed: false, optional: false, required: true
    _serverAddress;
    get serverAddress() {
        return this.getStringAttribute('server_address');
    }
    set serverAddress(value) {
        this._serverAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    get serverAddressInput() {
        return this._serverAddress;
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
export function serviceConvergeConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
export function serviceConvergeConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceConvergeConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._delay !== undefined) {
            hasAnyValues = true;
            internalValueResult.delay = this._delay;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._delay = undefined;
            this._timeout = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._delay = value.delay;
            this._timeout = value.timeout;
        }
    }
    // delay - computed: false, optional: true, required: false
    _delay;
    get delay() {
        return this.getStringAttribute('delay');
    }
    set delay(value) {
        this._delay = value;
    }
    resetDelay() {
        this._delay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delayInput() {
        return this._delay;
    }
    // timeout - computed: false, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getStringAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
}
export function serviceEndpointSpecPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        protocol: cdktf.stringToTerraform(struct.protocol),
        publish_mode: cdktf.stringToTerraform(struct.publishMode),
        published_port: cdktf.numberToTerraform(struct.publishedPort),
        target_port: cdktf.numberToTerraform(struct.targetPort),
    };
}
export function serviceEndpointSpecPortsToHclTerraform(struct) {
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
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        publish_mode: {
            value: cdktf.stringToHclTerraform(struct.publishMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        published_port: {
            value: cdktf.numberToHclTerraform(struct.publishedPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_port: {
            value: cdktf.numberToHclTerraform(struct.targetPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceEndpointSpecPortsOutputReference extends cdktf.ComplexObject {
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
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._publishMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishMode = this._publishMode;
        }
        if (this._publishedPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishedPort = this._publishedPort;
        }
        if (this._targetPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetPort = this._targetPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._protocol = undefined;
            this._publishMode = undefined;
            this._publishedPort = undefined;
            this._targetPort = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._protocol = value.protocol;
            this._publishMode = value.publishMode;
            this._publishedPort = value.publishedPort;
            this._targetPort = value.targetPort;
        }
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // protocol - computed: false, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // publish_mode - computed: false, optional: true, required: false
    _publishMode;
    get publishMode() {
        return this.getStringAttribute('publish_mode');
    }
    set publishMode(value) {
        this._publishMode = value;
    }
    resetPublishMode() {
        this._publishMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publishModeInput() {
        return this._publishMode;
    }
    // published_port - computed: true, optional: true, required: false
    _publishedPort;
    get publishedPort() {
        return this.getNumberAttribute('published_port');
    }
    set publishedPort(value) {
        this._publishedPort = value;
    }
    resetPublishedPort() {
        this._publishedPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publishedPortInput() {
        return this._publishedPort;
    }
    // target_port - computed: false, optional: false, required: true
    _targetPort;
    get targetPort() {
        return this.getNumberAttribute('target_port');
    }
    set targetPort(value) {
        this._targetPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetPortInput() {
        return this._targetPort;
    }
}
export class ServiceEndpointSpecPortsList extends cdktf.ComplexList {
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
        return new ServiceEndpointSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceEndpointSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        ports: cdktf.listMapper(serviceEndpointSpecPortsToTerraform, true)(struct.ports),
    };
}
export function serviceEndpointSpecToHclTerraform(struct) {
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
        ports: {
            value: cdktf.listMapperHcl(serviceEndpointSpecPortsToHclTerraform, true)(struct.ports),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceEndpointSpecPortsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceEndpointSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._ports?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mode = undefined;
            this._ports.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
            this._ports.internalValue = value.ports;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // ports - computed: false, optional: true, required: false
    _ports = new ServiceEndpointSpecPortsList(this, "ports", false);
    get ports() {
        return this._ports;
    }
    putPorts(value) {
        this._ports.internalValue = value;
    }
    resetPorts() {
        this._ports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portsInput() {
        return this._ports.internalValue;
    }
}
export function serviceLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function serviceLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceLabelsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
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
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
            this._value = value.value;
        }
    }
    // label - computed: false, optional: false, required: true
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class ServiceLabelsList extends cdktf.ComplexList {
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
        return new ServiceLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceModeReplicatedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replicas: cdktf.numberToTerraform(struct.replicas),
    };
}
export function serviceModeReplicatedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        replicas: {
            value: cdktf.numberToHclTerraform(struct.replicas),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceModeReplicatedOutputReference extends cdktf.ComplexObject {
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
        if (this._replicas !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicas = this._replicas;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._replicas = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._replicas = value.replicas;
        }
    }
    // replicas - computed: false, optional: true, required: false
    _replicas;
    get replicas() {
        return this.getNumberAttribute('replicas');
    }
    set replicas(value) {
        this._replicas = value;
    }
    resetReplicas() {
        this._replicas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicasInput() {
        return this._replicas;
    }
}
export function serviceModeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        global: cdktf.booleanToTerraform(struct.global),
        replicated: serviceModeReplicatedToTerraform(struct.replicated),
    };
}
export function serviceModeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        global: {
            value: cdktf.booleanToHclTerraform(struct.global),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        replicated: {
            value: serviceModeReplicatedToHclTerraform(struct.replicated),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceModeReplicatedList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceModeOutputReference extends cdktf.ComplexObject {
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
        if (this._global !== undefined) {
            hasAnyValues = true;
            internalValueResult.global = this._global;
        }
        if (this._replicated?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicated = this._replicated?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._global = undefined;
            this._replicated.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._global = value.global;
            this._replicated.internalValue = value.replicated;
        }
    }
    // global - computed: false, optional: true, required: false
    _global;
    get global() {
        return this.getBooleanAttribute('global');
    }
    set global(value) {
        this._global = value;
    }
    resetGlobal() {
        this._global = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get globalInput() {
        return this._global;
    }
    // replicated - computed: false, optional: true, required: false
    _replicated = new ServiceModeReplicatedOutputReference(this, "replicated");
    get replicated() {
        return this._replicated;
    }
    putReplicated(value) {
        this._replicated.internalValue = value;
    }
    resetReplicated() {
        this._replicated.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicatedInput() {
        return this._replicated.internalValue;
    }
}
export function serviceRollbackConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        failure_action: cdktf.stringToTerraform(struct.failureAction),
        max_failure_ratio: cdktf.stringToTerraform(struct.maxFailureRatio),
        monitor: cdktf.stringToTerraform(struct.monitor),
        order: cdktf.stringToTerraform(struct.order),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
    };
}
export function serviceRollbackConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_action: {
            value: cdktf.stringToHclTerraform(struct.failureAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_failure_ratio: {
            value: cdktf.stringToHclTerraform(struct.maxFailureRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitor: {
            value: cdktf.stringToHclTerraform(struct.monitor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelism: {
            value: cdktf.numberToHclTerraform(struct.parallelism),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceRollbackConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._delay !== undefined) {
            hasAnyValues = true;
            internalValueResult.delay = this._delay;
        }
        if (this._failureAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureAction = this._failureAction;
        }
        if (this._maxFailureRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFailureRatio = this._maxFailureRatio;
        }
        if (this._monitor !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitor = this._monitor;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._parallelism !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelism = this._parallelism;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._delay = undefined;
            this._failureAction = undefined;
            this._maxFailureRatio = undefined;
            this._monitor = undefined;
            this._order = undefined;
            this._parallelism = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._delay = value.delay;
            this._failureAction = value.failureAction;
            this._maxFailureRatio = value.maxFailureRatio;
            this._monitor = value.monitor;
            this._order = value.order;
            this._parallelism = value.parallelism;
        }
    }
    // delay - computed: false, optional: true, required: false
    _delay;
    get delay() {
        return this.getStringAttribute('delay');
    }
    set delay(value) {
        this._delay = value;
    }
    resetDelay() {
        this._delay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delayInput() {
        return this._delay;
    }
    // failure_action - computed: false, optional: true, required: false
    _failureAction;
    get failureAction() {
        return this.getStringAttribute('failure_action');
    }
    set failureAction(value) {
        this._failureAction = value;
    }
    resetFailureAction() {
        this._failureAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failureActionInput() {
        return this._failureAction;
    }
    // max_failure_ratio - computed: false, optional: true, required: false
    _maxFailureRatio;
    get maxFailureRatio() {
        return this.getStringAttribute('max_failure_ratio');
    }
    set maxFailureRatio(value) {
        this._maxFailureRatio = value;
    }
    resetMaxFailureRatio() {
        this._maxFailureRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxFailureRatioInput() {
        return this._maxFailureRatio;
    }
    // monitor - computed: false, optional: true, required: false
    _monitor;
    get monitor() {
        return this.getStringAttribute('monitor');
    }
    set monitor(value) {
        this._monitor = value;
    }
    resetMonitor() {
        this._monitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitorInput() {
        return this._monitor;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // parallelism - computed: false, optional: true, required: false
    _parallelism;
    get parallelism() {
        return this.getNumberAttribute('parallelism');
    }
    set parallelism(value) {
        this._parallelism = value;
    }
    resetParallelism() {
        this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelismInput() {
        return this._parallelism;
    }
}
export function serviceTaskSpecContainerSpecConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config_id: cdktf.stringToTerraform(struct.configId),
        config_name: cdktf.stringToTerraform(struct.configName),
        file_gid: cdktf.stringToTerraform(struct.fileGid),
        file_mode: cdktf.numberToTerraform(struct.fileMode),
        file_name: cdktf.stringToTerraform(struct.fileName),
        file_uid: cdktf.stringToTerraform(struct.fileUid),
    };
}
export function serviceTaskSpecContainerSpecConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        config_id: {
            value: cdktf.stringToHclTerraform(struct.configId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        config_name: {
            value: cdktf.stringToHclTerraform(struct.configName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_gid: {
            value: cdktf.stringToHclTerraform(struct.fileGid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_mode: {
            value: cdktf.numberToHclTerraform(struct.fileMode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        file_name: {
            value: cdktf.stringToHclTerraform(struct.fileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_uid: {
            value: cdktf.stringToHclTerraform(struct.fileUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecConfigsOutputReference extends cdktf.ComplexObject {
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
        if (this._configId !== undefined) {
            hasAnyValues = true;
            internalValueResult.configId = this._configId;
        }
        if (this._configName !== undefined) {
            hasAnyValues = true;
            internalValueResult.configName = this._configName;
        }
        if (this._fileGid !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileGid = this._fileGid;
        }
        if (this._fileMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileMode = this._fileMode;
        }
        if (this._fileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileName = this._fileName;
        }
        if (this._fileUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileUid = this._fileUid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configId = undefined;
            this._configName = undefined;
            this._fileGid = undefined;
            this._fileMode = undefined;
            this._fileName = undefined;
            this._fileUid = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configId = value.configId;
            this._configName = value.configName;
            this._fileGid = value.fileGid;
            this._fileMode = value.fileMode;
            this._fileName = value.fileName;
            this._fileUid = value.fileUid;
        }
    }
    // config_id - computed: false, optional: false, required: true
    _configId;
    get configId() {
        return this.getStringAttribute('config_id');
    }
    set configId(value) {
        this._configId = value;
    }
    // Temporarily expose input value. Use with caution.
    get configIdInput() {
        return this._configId;
    }
    // config_name - computed: false, optional: true, required: false
    _configName;
    get configName() {
        return this.getStringAttribute('config_name');
    }
    set configName(value) {
        this._configName = value;
    }
    resetConfigName() {
        this._configName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configNameInput() {
        return this._configName;
    }
    // file_gid - computed: false, optional: true, required: false
    _fileGid;
    get fileGid() {
        return this.getStringAttribute('file_gid');
    }
    set fileGid(value) {
        this._fileGid = value;
    }
    resetFileGid() {
        this._fileGid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileGidInput() {
        return this._fileGid;
    }
    // file_mode - computed: false, optional: true, required: false
    _fileMode;
    get fileMode() {
        return this.getNumberAttribute('file_mode');
    }
    set fileMode(value) {
        this._fileMode = value;
    }
    resetFileMode() {
        this._fileMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileModeInput() {
        return this._fileMode;
    }
    // file_name - computed: false, optional: false, required: true
    _fileName;
    get fileName() {
        return this.getStringAttribute('file_name');
    }
    set fileName(value) {
        this._fileName = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileNameInput() {
        return this._fileName;
    }
    // file_uid - computed: false, optional: true, required: false
    _fileUid;
    get fileUid() {
        return this.getStringAttribute('file_uid');
    }
    set fileUid(value) {
        this._fileUid = value;
    }
    resetFileUid() {
        this._fileUid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileUidInput() {
        return this._fileUid;
    }
}
export class ServiceTaskSpecContainerSpecConfigsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecDnsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.nameservers),
        options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.options),
        search: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.search),
    };
}
export function serviceTaskSpecContainerSpecDnsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        nameservers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.nameservers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        options: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.options),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        search: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.search),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecDnsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._nameservers !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameservers = this._nameservers;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        if (this._search !== undefined) {
            hasAnyValues = true;
            internalValueResult.search = this._search;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._nameservers = undefined;
            this._options = undefined;
            this._search = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._nameservers = value.nameservers;
            this._options = value.options;
            this._search = value.search;
        }
    }
    // nameservers - computed: false, optional: false, required: true
    _nameservers;
    get nameservers() {
        return this.getListAttribute('nameservers');
    }
    set nameservers(value) {
        this._nameservers = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameserversInput() {
        return this._nameservers;
    }
    // options - computed: false, optional: true, required: false
    _options;
    get options() {
        return this.getListAttribute('options');
    }
    set options(value) {
        this._options = value;
    }
    resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options;
    }
    // search - computed: false, optional: true, required: false
    _search;
    get search() {
        return this.getListAttribute('search');
    }
    set search(value) {
        this._search = value;
    }
    resetSearch() {
        this._search = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchInput() {
        return this._search;
    }
}
export function serviceTaskSpecContainerSpecHealthcheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_period: cdktf.stringToTerraform(struct.startPeriod),
        test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.test),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
export function serviceTaskSpecContainerSpecHealthcheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        interval: {
            value: cdktf.stringToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retries: {
            value: cdktf.numberToHclTerraform(struct.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_period: {
            value: cdktf.stringToHclTerraform(struct.startPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.test),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecHealthcheckOutputReference extends cdktf.ComplexObject {
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
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._retries !== undefined) {
            hasAnyValues = true;
            internalValueResult.retries = this._retries;
        }
        if (this._startPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPeriod = this._startPeriod;
        }
        if (this._test !== undefined) {
            hasAnyValues = true;
            internalValueResult.test = this._test;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._retries = undefined;
            this._startPeriod = undefined;
            this._test = undefined;
            this._timeout = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._retries = value.retries;
            this._startPeriod = value.startPeriod;
            this._test = value.test;
            this._timeout = value.timeout;
        }
    }
    // interval - computed: false, optional: true, required: false
    _interval;
    get interval() {
        return this.getStringAttribute('interval');
    }
    set interval(value) {
        this._interval = value;
    }
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get intervalInput() {
        return this._interval;
    }
    // retries - computed: false, optional: true, required: false
    _retries;
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    // start_period - computed: false, optional: true, required: false
    _startPeriod;
    get startPeriod() {
        return this.getStringAttribute('start_period');
    }
    set startPeriod(value) {
        this._startPeriod = value;
    }
    resetStartPeriod() {
        this._startPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startPeriodInput() {
        return this._startPeriod;
    }
    // test - computed: false, optional: true, required: false
    _test;
    get test() {
        return this.getListAttribute('test');
    }
    set test(value) {
        this._test = value;
    }
    resetTest() {
        this._test = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get testInput() {
        return this._test;
    }
    // timeout - computed: false, optional: true, required: false
    _timeout;
    get timeout() {
        return this.getStringAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
}
export function serviceTaskSpecContainerSpecHostsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
export function serviceTaskSpecContainerSpecHostsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecHostsOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._ip = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._ip = value.ip;
        }
    }
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // ip - computed: false, optional: false, required: true
    _ip;
    get ip() {
        return this.getStringAttribute('ip');
    }
    set ip(value) {
        this._ip = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipInput() {
        return this._ip;
    }
}
export class ServiceTaskSpecContainerSpecHostsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function serviceTaskSpecContainerSpecLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecLabelsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
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
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
            this._value = value.value;
        }
    }
    // label - computed: false, optional: false, required: true
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class ServiceTaskSpecContainerSpecLabelsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        propagation: cdktf.stringToTerraform(struct.propagation),
    };
}
export function serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        propagation: {
            value: cdktf.stringToHclTerraform(struct.propagation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._propagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagation = this._propagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._propagation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._propagation = value.propagation;
        }
    }
    // propagation - computed: false, optional: true, required: false
    _propagation;
    get propagation() {
        return this.getStringAttribute('propagation');
    }
    set propagation(value) {
        this._propagation = value;
    }
    resetPropagation() {
        this._propagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagationInput() {
        return this._propagation;
    }
}
export function serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.numberToTerraform(struct.mode),
        size_bytes: cdktf.numberToTerraform(struct.sizeBytes),
    };
}
export function serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.numberToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_bytes: {
            value: cdktf.numberToHclTerraform(struct.sizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._sizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeBytes = this._sizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mode = undefined;
            this._sizeBytes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
            this._sizeBytes = value.sizeBytes;
        }
    }
    // mode - computed: false, optional: true, required: false
    _mode;
    get mode() {
        return this.getNumberAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // size_bytes - computed: false, optional: true, required: false
    _sizeBytes;
    get sizeBytes() {
        return this.getNumberAttribute('size_bytes');
    }
    set sizeBytes(value) {
        this._sizeBytes = value;
    }
    resetSizeBytes() {
        this._sizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeBytesInput() {
        return this._sizeBytes;
    }
}
export function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference extends cdktf.ComplexObject {
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
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
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
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._label = value.label;
            this._value = value.value;
        }
    }
    // label - computed: false, optional: false, required: true
    _label;
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        driver_name: cdktf.stringToTerraform(struct.driverName),
        driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOptions),
        no_copy: cdktf.booleanToTerraform(struct.noCopy),
        labels: cdktf.listMapper(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform, true)(struct.labels),
    };
}
export function serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        driver_name: {
            value: cdktf.stringToHclTerraform(struct.driverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.driverOptions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        no_copy: {
            value: cdktf.booleanToHclTerraform(struct.noCopy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        labels: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._driverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverName = this._driverName;
        }
        if (this._driverOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOptions = this._driverOptions;
        }
        if (this._noCopy !== undefined) {
            hasAnyValues = true;
            internalValueResult.noCopy = this._noCopy;
        }
        if (this._labels?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._driverName = undefined;
            this._driverOptions = undefined;
            this._noCopy = undefined;
            this._labels.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._driverName = value.driverName;
            this._driverOptions = value.driverOptions;
            this._noCopy = value.noCopy;
            this._labels.internalValue = value.labels;
        }
    }
    // driver_name - computed: false, optional: true, required: false
    _driverName;
    get driverName() {
        return this.getStringAttribute('driver_name');
    }
    set driverName(value) {
        this._driverName = value;
    }
    resetDriverName() {
        this._driverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverNameInput() {
        return this._driverName;
    }
    // driver_options - computed: false, optional: true, required: false
    _driverOptions;
    get driverOptions() {
        return this.getStringMapAttribute('driver_options');
    }
    set driverOptions(value) {
        this._driverOptions = value;
    }
    resetDriverOptions() {
        this._driverOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptionsInput() {
        return this._driverOptions;
    }
    // no_copy - computed: false, optional: true, required: false
    _noCopy;
    get noCopy() {
        return this.getBooleanAttribute('no_copy');
    }
    set noCopy(value) {
        this._noCopy = value;
    }
    resetNoCopy() {
        this._noCopy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noCopyInput() {
        return this._noCopy;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
}
export function serviceTaskSpecContainerSpecMountsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source: cdktf.stringToTerraform(struct.source),
        target: cdktf.stringToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
        bind_options: serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct.bindOptions),
        tmpfs_options: serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct.tmpfsOptions),
        volume_options: serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct.volumeOptions),
    };
}
export function serviceTaskSpecContainerSpecMountsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bind_options: {
            value: serviceTaskSpecContainerSpecMountsBindOptionsToHclTerraform(struct.bindOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsBindOptionsList",
        },
        tmpfs_options: {
            value: serviceTaskSpecContainerSpecMountsTmpfsOptionsToHclTerraform(struct.tmpfsOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsTmpfsOptionsList",
        },
        volume_options: {
            value: serviceTaskSpecContainerSpecMountsVolumeOptionsToHclTerraform(struct.volumeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecMountsVolumeOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecMountsOutputReference extends cdktf.ComplexObject {
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
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._bindOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bindOptions = this._bindOptions?.internalValue;
        }
        if (this._tmpfsOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tmpfsOptions = this._tmpfsOptions?.internalValue;
        }
        if (this._volumeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readOnly = undefined;
            this._source = undefined;
            this._target = undefined;
            this._type = undefined;
            this._bindOptions.internalValue = undefined;
            this._tmpfsOptions.internalValue = undefined;
            this._volumeOptions.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readOnly = value.readOnly;
            this._source = value.source;
            this._target = value.target;
            this._type = value.type;
            this._bindOptions.internalValue = value.bindOptions;
            this._tmpfsOptions.internalValue = value.tmpfsOptions;
            this._volumeOptions.internalValue = value.volumeOptions;
        }
    }
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // target - computed: false, optional: false, required: true
    _target;
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // bind_options - computed: false, optional: true, required: false
    _bindOptions = new ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(this, "bind_options");
    get bindOptions() {
        return this._bindOptions;
    }
    putBindOptions(value) {
        this._bindOptions.internalValue = value;
    }
    resetBindOptions() {
        this._bindOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bindOptionsInput() {
        return this._bindOptions.internalValue;
    }
    // tmpfs_options - computed: false, optional: true, required: false
    _tmpfsOptions = new ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(this, "tmpfs_options");
    get tmpfsOptions() {
        return this._tmpfsOptions;
    }
    putTmpfsOptions(value) {
        this._tmpfsOptions.internalValue = value;
    }
    resetTmpfsOptions() {
        this._tmpfsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tmpfsOptionsInput() {
        return this._tmpfsOptions.internalValue;
    }
    // volume_options - computed: false, optional: true, required: false
    _volumeOptions = new ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(this, "volume_options");
    get volumeOptions() {
        return this._volumeOptions;
    }
    putVolumeOptions(value) {
        this._volumeOptions.internalValue = value;
    }
    resetVolumeOptions() {
        this._volumeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeOptionsInput() {
        return this._volumeOptions.internalValue;
    }
}
export class ServiceTaskSpecContainerSpecMountsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: cdktf.stringToTerraform(struct.file),
        registry: cdktf.stringToTerraform(struct.registry),
    };
}
export function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        registry: {
            value: cdktf.stringToHclTerraform(struct.registry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._file !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file;
        }
        if (this._registry !== undefined) {
            hasAnyValues = true;
            internalValueResult.registry = this._registry;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file = undefined;
            this._registry = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file = value.file;
            this._registry = value.registry;
        }
    }
    // file - computed: false, optional: true, required: false
    _file;
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    resetFile() {
        this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
    }
    // registry - computed: false, optional: true, required: false
    _registry;
    get registry() {
        return this.getStringAttribute('registry');
    }
    set registry(value) {
        this._registry = value;
    }
    resetRegistry() {
        this._registry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryInput() {
        return this._registry;
    }
}
export function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        level: cdktf.stringToTerraform(struct.level),
        role: cdktf.stringToTerraform(struct.role),
        type: cdktf.stringToTerraform(struct.type),
        user: cdktf.stringToTerraform(struct.user),
    };
}
export function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        level: {
            value: cdktf.stringToHclTerraform(struct.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role: {
            value: cdktf.stringToHclTerraform(struct.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference extends cdktf.ComplexObject {
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
        if (this._disable !== undefined) {
            hasAnyValues = true;
            internalValueResult.disable = this._disable;
        }
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._disable = undefined;
            this._level = undefined;
            this._role = undefined;
            this._type = undefined;
            this._user = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disable = value.disable;
            this._level = value.level;
            this._role = value.role;
            this._type = value.type;
            this._user = value.user;
        }
    }
    // disable - computed: false, optional: true, required: false
    _disable;
    get disable() {
        return this.getBooleanAttribute('disable');
    }
    set disable(value) {
        this._disable = value;
    }
    resetDisable() {
        this._disable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableInput() {
        return this._disable;
    }
    // level - computed: false, optional: true, required: false
    _level;
    get level() {
        return this.getStringAttribute('level');
    }
    set level(value) {
        this._level = value;
    }
    resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get levelInput() {
        return this._level;
    }
    // role - computed: false, optional: true, required: false
    _role;
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // user - computed: false, optional: true, required: false
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
}
export function serviceTaskSpecContainerSpecPrivilegesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        credential_spec: serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct.credentialSpec),
        se_linux_context: serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct.seLinuxContext),
    };
}
export function serviceTaskSpecContainerSpecPrivilegesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        credential_spec: {
            value: serviceTaskSpecContainerSpecPrivilegesCredentialSpecToHclTerraform(struct.credentialSpec),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesCredentialSpecList",
        },
        se_linux_context: {
            value: serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToHclTerraform(struct.seLinuxContext),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecPrivilegesOutputReference extends cdktf.ComplexObject {
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
        if (this._credentialSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialSpec = this._credentialSpec?.internalValue;
        }
        if (this._seLinuxContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.seLinuxContext = this._seLinuxContext?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._credentialSpec.internalValue = undefined;
            this._seLinuxContext.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._credentialSpec.internalValue = value.credentialSpec;
            this._seLinuxContext.internalValue = value.seLinuxContext;
        }
    }
    // credential_spec - computed: false, optional: true, required: false
    _credentialSpec = new ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(this, "credential_spec");
    get credentialSpec() {
        return this._credentialSpec;
    }
    putCredentialSpec(value) {
        this._credentialSpec.internalValue = value;
    }
    resetCredentialSpec() {
        this._credentialSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get credentialSpecInput() {
        return this._credentialSpec.internalValue;
    }
    // se_linux_context - computed: false, optional: true, required: false
    _seLinuxContext = new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(this, "se_linux_context");
    get seLinuxContext() {
        return this._seLinuxContext;
    }
    putSeLinuxContext(value) {
        this._seLinuxContext.internalValue = value;
    }
    resetSeLinuxContext() {
        this._seLinuxContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get seLinuxContextInput() {
        return this._seLinuxContext.internalValue;
    }
}
export function serviceTaskSpecContainerSpecSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_gid: cdktf.stringToTerraform(struct.fileGid),
        file_mode: cdktf.numberToTerraform(struct.fileMode),
        file_name: cdktf.stringToTerraform(struct.fileName),
        file_uid: cdktf.stringToTerraform(struct.fileUid),
        secret_id: cdktf.stringToTerraform(struct.secretId),
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
export function serviceTaskSpecContainerSpecSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_gid: {
            value: cdktf.stringToHclTerraform(struct.fileGid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_mode: {
            value: cdktf.numberToHclTerraform(struct.fileMode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        file_name: {
            value: cdktf.stringToHclTerraform(struct.fileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_uid: {
            value: cdktf.stringToHclTerraform(struct.fileUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktf.stringToHclTerraform(struct.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecSecretsOutputReference extends cdktf.ComplexObject {
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
        if (this._fileGid !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileGid = this._fileGid;
        }
        if (this._fileMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileMode = this._fileMode;
        }
        if (this._fileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileName = this._fileName;
        }
        if (this._fileUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileUid = this._fileUid;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileGid = undefined;
            this._fileMode = undefined;
            this._fileName = undefined;
            this._fileUid = undefined;
            this._secretId = undefined;
            this._secretName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileGid = value.fileGid;
            this._fileMode = value.fileMode;
            this._fileName = value.fileName;
            this._fileUid = value.fileUid;
            this._secretId = value.secretId;
            this._secretName = value.secretName;
        }
    }
    // file_gid - computed: false, optional: true, required: false
    _fileGid;
    get fileGid() {
        return this.getStringAttribute('file_gid');
    }
    set fileGid(value) {
        this._fileGid = value;
    }
    resetFileGid() {
        this._fileGid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileGidInput() {
        return this._fileGid;
    }
    // file_mode - computed: false, optional: true, required: false
    _fileMode;
    get fileMode() {
        return this.getNumberAttribute('file_mode');
    }
    set fileMode(value) {
        this._fileMode = value;
    }
    resetFileMode() {
        this._fileMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileModeInput() {
        return this._fileMode;
    }
    // file_name - computed: false, optional: false, required: true
    _fileName;
    get fileName() {
        return this.getStringAttribute('file_name');
    }
    set fileName(value) {
        this._fileName = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileNameInput() {
        return this._fileName;
    }
    // file_uid - computed: false, optional: true, required: false
    _fileUid;
    get fileUid() {
        return this.getStringAttribute('file_uid');
    }
    set fileUid(value) {
        this._fileUid = value;
    }
    resetFileUid() {
        this._fileUid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileUidInput() {
        return this._fileUid;
    }
    // secret_id - computed: false, optional: false, required: true
    _secretId;
    get secretId() {
        return this.getStringAttribute('secret_id');
    }
    set secretId(value) {
        this._secretId = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretIdInput() {
        return this._secretId;
    }
    // secret_name - computed: false, optional: true, required: false
    _secretName;
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    resetSecretName() {
        this._secretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
}
export class ServiceTaskSpecContainerSpecSecretsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecContainerSpecSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecContainerSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.args),
        cap_add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capAdd),
        cap_drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capDrop),
        command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.command),
        dir: cdktf.stringToTerraform(struct.dir),
        env: cdktf.hashMapper(cdktf.stringToTerraform)(struct.env),
        groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.groups),
        hostname: cdktf.stringToTerraform(struct.hostname),
        image: cdktf.stringToTerraform(struct.image),
        isolation: cdktf.stringToTerraform(struct.isolation),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        stop_grace_period: cdktf.stringToTerraform(struct.stopGracePeriod),
        stop_signal: cdktf.stringToTerraform(struct.stopSignal),
        sysctl: cdktf.hashMapper(cdktf.stringToTerraform)(struct.sysctl),
        user: cdktf.stringToTerraform(struct.user),
        configs: cdktf.listMapper(serviceTaskSpecContainerSpecConfigsToTerraform, true)(struct.configs),
        dns_config: serviceTaskSpecContainerSpecDnsConfigToTerraform(struct.dnsConfig),
        healthcheck: serviceTaskSpecContainerSpecHealthcheckToTerraform(struct.healthcheck),
        hosts: cdktf.listMapper(serviceTaskSpecContainerSpecHostsToTerraform, true)(struct.hosts),
        labels: cdktf.listMapper(serviceTaskSpecContainerSpecLabelsToTerraform, true)(struct.labels),
        mounts: cdktf.listMapper(serviceTaskSpecContainerSpecMountsToTerraform, true)(struct.mounts),
        privileges: serviceTaskSpecContainerSpecPrivilegesToTerraform(struct.privileges),
        secrets: cdktf.listMapper(serviceTaskSpecContainerSpecSecretsToTerraform, true)(struct.secrets),
    };
}
export function serviceTaskSpecContainerSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        args: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.args),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cap_add: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capAdd),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cap_drop: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capDrop),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        command: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dir: {
            value: cdktf.stringToHclTerraform(struct.dir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        env: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.env),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        groups: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktf.stringToHclTerraform(struct.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        isolation: {
            value: cdktf.stringToHclTerraform(struct.isolation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        stop_grace_period: {
            value: cdktf.stringToHclTerraform(struct.stopGracePeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stop_signal: {
            value: cdktf.stringToHclTerraform(struct.stopSignal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sysctl: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.sysctl),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        configs: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecConfigsToHclTerraform, true)(struct.configs),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecConfigsList",
        },
        dns_config: {
            value: serviceTaskSpecContainerSpecDnsConfigToHclTerraform(struct.dnsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecDnsConfigList",
        },
        healthcheck: {
            value: serviceTaskSpecContainerSpecHealthcheckToHclTerraform(struct.healthcheck),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecHealthcheckList",
        },
        hosts: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecHostsToHclTerraform, true)(struct.hosts),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecHostsList",
        },
        labels: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecLabelsList",
        },
        mounts: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecMountsToHclTerraform, true)(struct.mounts),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecMountsList",
        },
        privileges: {
            value: serviceTaskSpecContainerSpecPrivilegesToHclTerraform(struct.privileges),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecPrivilegesList",
        },
        secrets: {
            value: cdktf.listMapperHcl(serviceTaskSpecContainerSpecSecretsToHclTerraform, true)(struct.secrets),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecContainerSpecSecretsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecContainerSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._args !== undefined) {
            hasAnyValues = true;
            internalValueResult.args = this._args;
        }
        if (this._capAdd !== undefined) {
            hasAnyValues = true;
            internalValueResult.capAdd = this._capAdd;
        }
        if (this._capDrop !== undefined) {
            hasAnyValues = true;
            internalValueResult.capDrop = this._capDrop;
        }
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._dir !== undefined) {
            hasAnyValues = true;
            internalValueResult.dir = this._dir;
        }
        if (this._env !== undefined) {
            hasAnyValues = true;
            internalValueResult.env = this._env;
        }
        if (this._groups !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._isolation !== undefined) {
            hasAnyValues = true;
            internalValueResult.isolation = this._isolation;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._stopGracePeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.stopGracePeriod = this._stopGracePeriod;
        }
        if (this._stopSignal !== undefined) {
            hasAnyValues = true;
            internalValueResult.stopSignal = this._stopSignal;
        }
        if (this._sysctl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sysctl = this._sysctl;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        if (this._configs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configs = this._configs?.internalValue;
        }
        if (this._dnsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
        }
        if (this._healthcheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthcheck = this._healthcheck?.internalValue;
        }
        if (this._hosts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hosts = this._hosts?.internalValue;
        }
        if (this._labels?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels?.internalValue;
        }
        if (this._mounts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mounts = this._mounts?.internalValue;
        }
        if (this._privileges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privileges = this._privileges?.internalValue;
        }
        if (this._secrets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secrets = this._secrets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._args = undefined;
            this._capAdd = undefined;
            this._capDrop = undefined;
            this._command = undefined;
            this._dir = undefined;
            this._env = undefined;
            this._groups = undefined;
            this._hostname = undefined;
            this._image = undefined;
            this._isolation = undefined;
            this._readOnly = undefined;
            this._stopGracePeriod = undefined;
            this._stopSignal = undefined;
            this._sysctl = undefined;
            this._user = undefined;
            this._configs.internalValue = undefined;
            this._dnsConfig.internalValue = undefined;
            this._healthcheck.internalValue = undefined;
            this._hosts.internalValue = undefined;
            this._labels.internalValue = undefined;
            this._mounts.internalValue = undefined;
            this._privileges.internalValue = undefined;
            this._secrets.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._args = value.args;
            this._capAdd = value.capAdd;
            this._capDrop = value.capDrop;
            this._command = value.command;
            this._dir = value.dir;
            this._env = value.env;
            this._groups = value.groups;
            this._hostname = value.hostname;
            this._image = value.image;
            this._isolation = value.isolation;
            this._readOnly = value.readOnly;
            this._stopGracePeriod = value.stopGracePeriod;
            this._stopSignal = value.stopSignal;
            this._sysctl = value.sysctl;
            this._user = value.user;
            this._configs.internalValue = value.configs;
            this._dnsConfig.internalValue = value.dnsConfig;
            this._healthcheck.internalValue = value.healthcheck;
            this._hosts.internalValue = value.hosts;
            this._labels.internalValue = value.labels;
            this._mounts.internalValue = value.mounts;
            this._privileges.internalValue = value.privileges;
            this._secrets.internalValue = value.secrets;
        }
    }
    // args - computed: false, optional: true, required: false
    _args;
    get args() {
        return this.getListAttribute('args');
    }
    set args(value) {
        this._args = value;
    }
    resetArgs() {
        this._args = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get argsInput() {
        return this._args;
    }
    // cap_add - computed: false, optional: true, required: false
    _capAdd;
    get capAdd() {
        return this.getListAttribute('cap_add');
    }
    set capAdd(value) {
        this._capAdd = value;
    }
    resetCapAdd() {
        this._capAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capAddInput() {
        return this._capAdd;
    }
    // cap_drop - computed: false, optional: true, required: false
    _capDrop;
    get capDrop() {
        return this.getListAttribute('cap_drop');
    }
    set capDrop(value) {
        this._capDrop = value;
    }
    resetCapDrop() {
        this._capDrop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capDropInput() {
        return this._capDrop;
    }
    // command - computed: false, optional: true, required: false
    _command;
    get command() {
        return this.getListAttribute('command');
    }
    set command(value) {
        this._command = value;
    }
    resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commandInput() {
        return this._command;
    }
    // dir - computed: false, optional: true, required: false
    _dir;
    get dir() {
        return this.getStringAttribute('dir');
    }
    set dir(value) {
        this._dir = value;
    }
    resetDir() {
        this._dir = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dirInput() {
        return this._dir;
    }
    // env - computed: false, optional: true, required: false
    _env;
    get env() {
        return this.getStringMapAttribute('env');
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
    // groups - computed: false, optional: true, required: false
    _groups;
    get groups() {
        return this.getListAttribute('groups');
    }
    set groups(value) {
        this._groups = value;
    }
    resetGroups() {
        this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupsInput() {
        return this._groups;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // image - computed: false, optional: false, required: true
    _image;
    get image() {
        return this.getStringAttribute('image');
    }
    set image(value) {
        this._image = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image;
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
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
    }
    // stop_grace_period - computed: true, optional: true, required: false
    _stopGracePeriod;
    get stopGracePeriod() {
        return this.getStringAttribute('stop_grace_period');
    }
    set stopGracePeriod(value) {
        this._stopGracePeriod = value;
    }
    resetStopGracePeriod() {
        this._stopGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopGracePeriodInput() {
        return this._stopGracePeriod;
    }
    // stop_signal - computed: false, optional: true, required: false
    _stopSignal;
    get stopSignal() {
        return this.getStringAttribute('stop_signal');
    }
    set stopSignal(value) {
        this._stopSignal = value;
    }
    resetStopSignal() {
        this._stopSignal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopSignalInput() {
        return this._stopSignal;
    }
    // sysctl - computed: false, optional: true, required: false
    _sysctl;
    get sysctl() {
        return this.getStringMapAttribute('sysctl');
    }
    set sysctl(value) {
        this._sysctl = value;
    }
    resetSysctl() {
        this._sysctl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sysctlInput() {
        return this._sysctl;
    }
    // user - computed: false, optional: true, required: false
    _user;
    get user() {
        return this.getStringAttribute('user');
    }
    set user(value) {
        this._user = value;
    }
    resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user;
    }
    // configs - computed: false, optional: true, required: false
    _configs = new ServiceTaskSpecContainerSpecConfigsList(this, "configs", true);
    get configs() {
        return this._configs;
    }
    putConfigs(value) {
        this._configs.internalValue = value;
    }
    resetConfigs() {
        this._configs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configsInput() {
        return this._configs.internalValue;
    }
    // dns_config - computed: false, optional: true, required: false
    _dnsConfig = new ServiceTaskSpecContainerSpecDnsConfigOutputReference(this, "dns_config");
    get dnsConfig() {
        return this._dnsConfig;
    }
    putDnsConfig(value) {
        this._dnsConfig.internalValue = value;
    }
    resetDnsConfig() {
        this._dnsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsConfigInput() {
        return this._dnsConfig.internalValue;
    }
    // healthcheck - computed: false, optional: true, required: false
    _healthcheck = new ServiceTaskSpecContainerSpecHealthcheckOutputReference(this, "healthcheck");
    get healthcheck() {
        return this._healthcheck;
    }
    putHealthcheck(value) {
        this._healthcheck.internalValue = value;
    }
    resetHealthcheck() {
        this._healthcheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthcheckInput() {
        return this._healthcheck.internalValue;
    }
    // hosts - computed: false, optional: true, required: false
    _hosts = new ServiceTaskSpecContainerSpecHostsList(this, "hosts", true);
    get hosts() {
        return this._hosts;
    }
    putHosts(value) {
        this._hosts.internalValue = value;
    }
    resetHosts() {
        this._hosts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostsInput() {
        return this._hosts.internalValue;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new ServiceTaskSpecContainerSpecLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
    // mounts - computed: false, optional: true, required: false
    _mounts = new ServiceTaskSpecContainerSpecMountsList(this, "mounts", true);
    get mounts() {
        return this._mounts;
    }
    putMounts(value) {
        this._mounts.internalValue = value;
    }
    resetMounts() {
        this._mounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mountsInput() {
        return this._mounts.internalValue;
    }
    // privileges - computed: false, optional: true, required: false
    _privileges = new ServiceTaskSpecContainerSpecPrivilegesOutputReference(this, "privileges");
    get privileges() {
        return this._privileges;
    }
    putPrivileges(value) {
        this._privileges.internalValue = value;
    }
    resetPrivileges() {
        this._privileges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privilegesInput() {
        return this._privileges.internalValue;
    }
    // secrets - computed: false, optional: true, required: false
    _secrets = new ServiceTaskSpecContainerSpecSecretsList(this, "secrets", true);
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
}
export function serviceTaskSpecLogDriverToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
    };
}
export function serviceTaskSpecLogDriverToHclTerraform(struct) {
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
        options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.options),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecLogDriverOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._options = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._options = value.options;
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
    // options - computed: false, optional: true, required: false
    _options;
    get options() {
        return this.getStringMapAttribute('options');
    }
    set options(value) {
        this._options = value;
    }
    resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options;
    }
}
export function serviceTaskSpecNetworksAdvancedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.aliases),
        driver_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.driverOpts),
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function serviceTaskSpecNetworksAdvancedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aliases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.aliases),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        driver_opts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.driverOpts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecNetworksAdvancedOutputReference extends cdktf.ComplexObject {
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
        if (this._aliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.aliases = this._aliases;
        }
        if (this._driverOpts !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOpts = this._driverOpts;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aliases = undefined;
            this._driverOpts = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aliases = value.aliases;
            this._driverOpts = value.driverOpts;
            this._id = value.id;
            this._name = value.name;
        }
    }
    // aliases - computed: false, optional: true, required: false
    _aliases;
    get aliases() {
        return cdktf.Fn.tolist(this.getListAttribute('aliases'));
    }
    set aliases(value) {
        this._aliases = value;
    }
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasesInput() {
        return this._aliases;
    }
    // driver_opts - computed: false, optional: true, required: false
    _driverOpts;
    get driverOpts() {
        return cdktf.Fn.tolist(this.getListAttribute('driver_opts'));
    }
    set driverOpts(value) {
        this._driverOpts = value;
    }
    resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptsInput() {
        return this._driverOpts;
    }
    // id - computed: false, optional: true, required: false
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
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export class ServiceTaskSpecNetworksAdvancedList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecPlacementPlatformsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        architecture: cdktf.stringToTerraform(struct.architecture),
        os: cdktf.stringToTerraform(struct.os),
    };
}
export function serviceTaskSpecPlacementPlatformsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        architecture: {
            value: cdktf.stringToHclTerraform(struct.architecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        os: {
            value: cdktf.stringToHclTerraform(struct.os),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecPlacementPlatformsOutputReference extends cdktf.ComplexObject {
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
        if (this._architecture !== undefined) {
            hasAnyValues = true;
            internalValueResult.architecture = this._architecture;
        }
        if (this._os !== undefined) {
            hasAnyValues = true;
            internalValueResult.os = this._os;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._architecture = undefined;
            this._os = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._architecture = value.architecture;
            this._os = value.os;
        }
    }
    // architecture - computed: false, optional: false, required: true
    _architecture;
    get architecture() {
        return this.getStringAttribute('architecture');
    }
    set architecture(value) {
        this._architecture = value;
    }
    // Temporarily expose input value. Use with caution.
    get architectureInput() {
        return this._architecture;
    }
    // os - computed: false, optional: false, required: true
    _os;
    get os() {
        return this.getStringAttribute('os');
    }
    set os(value) {
        this._os = value;
    }
    // Temporarily expose input value. Use with caution.
    get osInput() {
        return this._os;
    }
}
export class ServiceTaskSpecPlacementPlatformsList extends cdktf.ComplexList {
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
        return new ServiceTaskSpecPlacementPlatformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function serviceTaskSpecPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.constraints),
        max_replicas: cdktf.numberToTerraform(struct.maxReplicas),
        prefs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.prefs),
        platforms: cdktf.listMapper(serviceTaskSpecPlacementPlatformsToTerraform, true)(struct.platforms),
    };
}
export function serviceTaskSpecPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        constraints: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.constraints),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        max_replicas: {
            value: cdktf.numberToHclTerraform(struct.maxReplicas),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        prefs: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.prefs),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        platforms: {
            value: cdktf.listMapperHcl(serviceTaskSpecPlacementPlatformsToHclTerraform, true)(struct.platforms),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecPlacementPlatformsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecPlacementOutputReference extends cdktf.ComplexObject {
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
        if (this._constraints !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints;
        }
        if (this._maxReplicas !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReplicas = this._maxReplicas;
        }
        if (this._prefs !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefs = this._prefs;
        }
        if (this._platforms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.platforms = this._platforms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._constraints = undefined;
            this._maxReplicas = undefined;
            this._prefs = undefined;
            this._platforms.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._constraints = value.constraints;
            this._maxReplicas = value.maxReplicas;
            this._prefs = value.prefs;
            this._platforms.internalValue = value.platforms;
        }
    }
    // constraints - computed: false, optional: true, required: false
    _constraints;
    get constraints() {
        return cdktf.Fn.tolist(this.getListAttribute('constraints'));
    }
    set constraints(value) {
        this._constraints = value;
    }
    resetConstraints() {
        this._constraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get constraintsInput() {
        return this._constraints;
    }
    // max_replicas - computed: false, optional: true, required: false
    _maxReplicas;
    get maxReplicas() {
        return this.getNumberAttribute('max_replicas');
    }
    set maxReplicas(value) {
        this._maxReplicas = value;
    }
    resetMaxReplicas() {
        this._maxReplicas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxReplicasInput() {
        return this._maxReplicas;
    }
    // prefs - computed: false, optional: true, required: false
    _prefs;
    get prefs() {
        return cdktf.Fn.tolist(this.getListAttribute('prefs'));
    }
    set prefs(value) {
        this._prefs = value;
    }
    resetPrefs() {
        this._prefs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefsInput() {
        return this._prefs;
    }
    // platforms - computed: false, optional: true, required: false
    _platforms = new ServiceTaskSpecPlacementPlatformsList(this, "platforms", true);
    get platforms() {
        return this._platforms;
    }
    putPlatforms(value) {
        this._platforms.internalValue = value;
    }
    resetPlatforms() {
        this._platforms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformsInput() {
        return this._platforms.internalValue;
    }
}
export function serviceTaskSpecResourcesLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        memory_bytes: cdktf.numberToTerraform(struct.memoryBytes),
        nano_cpus: cdktf.numberToTerraform(struct.nanoCpus),
    };
}
export function serviceTaskSpecResourcesLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        memory_bytes: {
            value: cdktf.numberToHclTerraform(struct.memoryBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        nano_cpus: {
            value: cdktf.numberToHclTerraform(struct.nanoCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecResourcesLimitsOutputReference extends cdktf.ComplexObject {
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
        if (this._memoryBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryBytes = this._memoryBytes;
        }
        if (this._nanoCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.nanoCpus = this._nanoCpus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._memoryBytes = undefined;
            this._nanoCpus = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._memoryBytes = value.memoryBytes;
            this._nanoCpus = value.nanoCpus;
        }
    }
    // memory_bytes - computed: false, optional: true, required: false
    _memoryBytes;
    get memoryBytes() {
        return this.getNumberAttribute('memory_bytes');
    }
    set memoryBytes(value) {
        this._memoryBytes = value;
    }
    resetMemoryBytes() {
        this._memoryBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryBytesInput() {
        return this._memoryBytes;
    }
    // nano_cpus - computed: false, optional: true, required: false
    _nanoCpus;
    get nanoCpus() {
        return this.getNumberAttribute('nano_cpus');
    }
    set nanoCpus(value) {
        this._nanoCpus = value;
    }
    resetNanoCpus() {
        this._nanoCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nanoCpusInput() {
        return this._nanoCpus;
    }
}
export function serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        discrete_resources_spec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.discreteResourcesSpec),
        named_resources_spec: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.namedResourcesSpec),
    };
}
export function serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        discrete_resources_spec: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.discreteResourcesSpec),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        named_resources_spec: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.namedResourcesSpec),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecResourcesReservationGenericResourcesOutputReference extends cdktf.ComplexObject {
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
        if (this._discreteResourcesSpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.discreteResourcesSpec = this._discreteResourcesSpec;
        }
        if (this._namedResourcesSpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.namedResourcesSpec = this._namedResourcesSpec;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._discreteResourcesSpec = undefined;
            this._namedResourcesSpec = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._discreteResourcesSpec = value.discreteResourcesSpec;
            this._namedResourcesSpec = value.namedResourcesSpec;
        }
    }
    // discrete_resources_spec - computed: false, optional: true, required: false
    _discreteResourcesSpec;
    get discreteResourcesSpec() {
        return cdktf.Fn.tolist(this.getListAttribute('discrete_resources_spec'));
    }
    set discreteResourcesSpec(value) {
        this._discreteResourcesSpec = value;
    }
    resetDiscreteResourcesSpec() {
        this._discreteResourcesSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get discreteResourcesSpecInput() {
        return this._discreteResourcesSpec;
    }
    // named_resources_spec - computed: false, optional: true, required: false
    _namedResourcesSpec;
    get namedResourcesSpec() {
        return cdktf.Fn.tolist(this.getListAttribute('named_resources_spec'));
    }
    set namedResourcesSpec(value) {
        this._namedResourcesSpec = value;
    }
    resetNamedResourcesSpec() {
        this._namedResourcesSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namedResourcesSpecInput() {
        return this._namedResourcesSpec;
    }
}
export function serviceTaskSpecResourcesReservationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        memory_bytes: cdktf.numberToTerraform(struct.memoryBytes),
        nano_cpus: cdktf.numberToTerraform(struct.nanoCpus),
        generic_resources: serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct.genericResources),
    };
}
export function serviceTaskSpecResourcesReservationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        memory_bytes: {
            value: cdktf.numberToHclTerraform(struct.memoryBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        nano_cpus: {
            value: cdktf.numberToHclTerraform(struct.nanoCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        generic_resources: {
            value: serviceTaskSpecResourcesReservationGenericResourcesToHclTerraform(struct.genericResources),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesReservationGenericResourcesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecResourcesReservationOutputReference extends cdktf.ComplexObject {
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
        if (this._memoryBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryBytes = this._memoryBytes;
        }
        if (this._nanoCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.nanoCpus = this._nanoCpus;
        }
        if (this._genericResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.genericResources = this._genericResources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._memoryBytes = undefined;
            this._nanoCpus = undefined;
            this._genericResources.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._memoryBytes = value.memoryBytes;
            this._nanoCpus = value.nanoCpus;
            this._genericResources.internalValue = value.genericResources;
        }
    }
    // memory_bytes - computed: false, optional: true, required: false
    _memoryBytes;
    get memoryBytes() {
        return this.getNumberAttribute('memory_bytes');
    }
    set memoryBytes(value) {
        this._memoryBytes = value;
    }
    resetMemoryBytes() {
        this._memoryBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryBytesInput() {
        return this._memoryBytes;
    }
    // nano_cpus - computed: false, optional: true, required: false
    _nanoCpus;
    get nanoCpus() {
        return this.getNumberAttribute('nano_cpus');
    }
    set nanoCpus(value) {
        this._nanoCpus = value;
    }
    resetNanoCpus() {
        this._nanoCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nanoCpusInput() {
        return this._nanoCpus;
    }
    // generic_resources - computed: false, optional: true, required: false
    _genericResources = new ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(this, "generic_resources");
    get genericResources() {
        return this._genericResources;
    }
    putGenericResources(value) {
        this._genericResources.internalValue = value;
    }
    resetGenericResources() {
        this._genericResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get genericResourcesInput() {
        return this._genericResources.internalValue;
    }
}
export function serviceTaskSpecResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limits: serviceTaskSpecResourcesLimitsToTerraform(struct.limits),
        reservation: serviceTaskSpecResourcesReservationToTerraform(struct.reservation),
    };
}
export function serviceTaskSpecResourcesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        limits: {
            value: serviceTaskSpecResourcesLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesLimitsList",
        },
        reservation: {
            value: serviceTaskSpecResourcesReservationToHclTerraform(struct.reservation),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesReservationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecResourcesOutputReference extends cdktf.ComplexObject {
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
        if (this._limits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limits = this._limits?.internalValue;
        }
        if (this._reservation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservation = this._reservation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._limits.internalValue = undefined;
            this._reservation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._limits.internalValue = value.limits;
            this._reservation.internalValue = value.reservation;
        }
    }
    // limits - computed: false, optional: true, required: false
    _limits = new ServiceTaskSpecResourcesLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // reservation - computed: false, optional: true, required: false
    _reservation = new ServiceTaskSpecResourcesReservationOutputReference(this, "reservation");
    get reservation() {
        return this._reservation;
    }
    putReservation(value) {
        this._reservation.internalValue = value;
    }
    resetReservation() {
        this._reservation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reservationInput() {
        return this._reservation.internalValue;
    }
}
export function serviceTaskSpecRestartPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        delay: cdktf.stringToTerraform(struct.delay),
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        window: cdktf.stringToTerraform(struct.window),
    };
}
export function serviceTaskSpecRestartPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        condition: {
            value: cdktf.stringToHclTerraform(struct.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_attempts: {
            value: cdktf.numberToHclTerraform(struct.maxAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        window: {
            value: cdktf.stringToHclTerraform(struct.window),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecRestartPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._delay !== undefined) {
            hasAnyValues = true;
            internalValueResult.delay = this._delay;
        }
        if (this._maxAttempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAttempts = this._maxAttempts;
        }
        if (this._window !== undefined) {
            hasAnyValues = true;
            internalValueResult.window = this._window;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._condition = undefined;
            this._delay = undefined;
            this._maxAttempts = undefined;
            this._window = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._condition = value.condition;
            this._delay = value.delay;
            this._maxAttempts = value.maxAttempts;
            this._window = value.window;
        }
    }
    // condition - computed: false, optional: true, required: false
    _condition;
    get condition() {
        return this.getStringAttribute('condition');
    }
    set condition(value) {
        this._condition = value;
    }
    resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition;
    }
    // delay - computed: false, optional: true, required: false
    _delay;
    get delay() {
        return this.getStringAttribute('delay');
    }
    set delay(value) {
        this._delay = value;
    }
    resetDelay() {
        this._delay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delayInput() {
        return this._delay;
    }
    // max_attempts - computed: false, optional: true, required: false
    _maxAttempts;
    get maxAttempts() {
        return this.getNumberAttribute('max_attempts');
    }
    set maxAttempts(value) {
        this._maxAttempts = value;
    }
    resetMaxAttempts() {
        this._maxAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAttemptsInput() {
        return this._maxAttempts;
    }
    // window - computed: false, optional: true, required: false
    _window;
    get window() {
        return this.getStringAttribute('window');
    }
    set window(value) {
        this._window = value;
    }
    resetWindow() {
        this._window = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get windowInput() {
        return this._window;
    }
}
export function serviceTaskSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        force_update: cdktf.numberToTerraform(struct.forceUpdate),
        runtime: cdktf.stringToTerraform(struct.runtime),
        container_spec: serviceTaskSpecContainerSpecToTerraform(struct.containerSpec),
        log_driver: serviceTaskSpecLogDriverToTerraform(struct.logDriver),
        networks_advanced: cdktf.listMapper(serviceTaskSpecNetworksAdvancedToTerraform, true)(struct.networksAdvanced),
        placement: serviceTaskSpecPlacementToTerraform(struct.placement),
        resources: serviceTaskSpecResourcesToTerraform(struct.resources),
        restart_policy: serviceTaskSpecRestartPolicyToTerraform(struct.restartPolicy),
    };
}
export function serviceTaskSpecToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        force_update: {
            value: cdktf.numberToHclTerraform(struct.forceUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        runtime: {
            value: cdktf.stringToHclTerraform(struct.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_spec: {
            value: serviceTaskSpecContainerSpecToHclTerraform(struct.containerSpec),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecContainerSpecList",
        },
        log_driver: {
            value: serviceTaskSpecLogDriverToHclTerraform(struct.logDriver),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecLogDriverList",
        },
        networks_advanced: {
            value: cdktf.listMapperHcl(serviceTaskSpecNetworksAdvancedToHclTerraform, true)(struct.networksAdvanced),
            isBlock: true,
            type: "set",
            storageClassType: "ServiceTaskSpecNetworksAdvancedList",
        },
        placement: {
            value: serviceTaskSpecPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecPlacementList",
        },
        resources: {
            value: serviceTaskSpecResourcesToHclTerraform(struct.resources),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecResourcesList",
        },
        restart_policy: {
            value: serviceTaskSpecRestartPolicyToHclTerraform(struct.restartPolicy),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceTaskSpecRestartPolicyList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceTaskSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._forceUpdate !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceUpdate = this._forceUpdate;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._containerSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerSpec = this._containerSpec?.internalValue;
        }
        if (this._logDriver?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDriver = this._logDriver?.internalValue;
        }
        if (this._networksAdvanced?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networksAdvanced = this._networksAdvanced?.internalValue;
        }
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        if (this._restartPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartPolicy = this._restartPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forceUpdate = undefined;
            this._runtime = undefined;
            this._containerSpec.internalValue = undefined;
            this._logDriver.internalValue = undefined;
            this._networksAdvanced.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._resources.internalValue = undefined;
            this._restartPolicy.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forceUpdate = value.forceUpdate;
            this._runtime = value.runtime;
            this._containerSpec.internalValue = value.containerSpec;
            this._logDriver.internalValue = value.logDriver;
            this._networksAdvanced.internalValue = value.networksAdvanced;
            this._placement.internalValue = value.placement;
            this._resources.internalValue = value.resources;
            this._restartPolicy.internalValue = value.restartPolicy;
        }
    }
    // force_update - computed: true, optional: true, required: false
    _forceUpdate;
    get forceUpdate() {
        return this.getNumberAttribute('force_update');
    }
    set forceUpdate(value) {
        this._forceUpdate = value;
    }
    resetForceUpdate() {
        this._forceUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceUpdateInput() {
        return this._forceUpdate;
    }
    // runtime - computed: true, optional: true, required: false
    _runtime;
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    set runtime(value) {
        this._runtime = value;
    }
    resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeInput() {
        return this._runtime;
    }
    // container_spec - computed: false, optional: false, required: true
    _containerSpec = new ServiceTaskSpecContainerSpecOutputReference(this, "container_spec");
    get containerSpec() {
        return this._containerSpec;
    }
    putContainerSpec(value) {
        this._containerSpec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get containerSpecInput() {
        return this._containerSpec.internalValue;
    }
    // log_driver - computed: false, optional: true, required: false
    _logDriver = new ServiceTaskSpecLogDriverOutputReference(this, "log_driver");
    get logDriver() {
        return this._logDriver;
    }
    putLogDriver(value) {
        this._logDriver.internalValue = value;
    }
    resetLogDriver() {
        this._logDriver.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logDriverInput() {
        return this._logDriver.internalValue;
    }
    // networks_advanced - computed: false, optional: true, required: false
    _networksAdvanced = new ServiceTaskSpecNetworksAdvancedList(this, "networks_advanced", true);
    get networksAdvanced() {
        return this._networksAdvanced;
    }
    putNetworksAdvanced(value) {
        this._networksAdvanced.internalValue = value;
    }
    resetNetworksAdvanced() {
        this._networksAdvanced.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksAdvancedInput() {
        return this._networksAdvanced.internalValue;
    }
    // placement - computed: false, optional: true, required: false
    _placement = new ServiceTaskSpecPlacementOutputReference(this, "placement");
    get placement() {
        return this._placement;
    }
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement.internalValue;
    }
    // resources - computed: false, optional: true, required: false
    _resources = new ServiceTaskSpecResourcesOutputReference(this, "resources");
    get resources() {
        return this._resources;
    }
    putResources(value) {
        this._resources.internalValue = value;
    }
    resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourcesInput() {
        return this._resources.internalValue;
    }
    // restart_policy - computed: false, optional: true, required: false
    _restartPolicy = new ServiceTaskSpecRestartPolicyOutputReference(this, "restart_policy");
    get restartPolicy() {
        return this._restartPolicy;
    }
    putRestartPolicy(value) {
        this._restartPolicy.internalValue = value;
    }
    resetRestartPolicy() {
        this._restartPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restartPolicyInput() {
        return this._restartPolicy.internalValue;
    }
}
export function serviceUpdateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delay: cdktf.stringToTerraform(struct.delay),
        failure_action: cdktf.stringToTerraform(struct.failureAction),
        max_failure_ratio: cdktf.stringToTerraform(struct.maxFailureRatio),
        monitor: cdktf.stringToTerraform(struct.monitor),
        order: cdktf.stringToTerraform(struct.order),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
    };
}
export function serviceUpdateConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delay: {
            value: cdktf.stringToHclTerraform(struct.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_action: {
            value: cdktf.stringToHclTerraform(struct.failureAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_failure_ratio: {
            value: cdktf.stringToHclTerraform(struct.maxFailureRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitor: {
            value: cdktf.stringToHclTerraform(struct.monitor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelism: {
            value: cdktf.numberToHclTerraform(struct.parallelism),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ServiceUpdateConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._delay !== undefined) {
            hasAnyValues = true;
            internalValueResult.delay = this._delay;
        }
        if (this._failureAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureAction = this._failureAction;
        }
        if (this._maxFailureRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFailureRatio = this._maxFailureRatio;
        }
        if (this._monitor !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitor = this._monitor;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._parallelism !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelism = this._parallelism;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._delay = undefined;
            this._failureAction = undefined;
            this._maxFailureRatio = undefined;
            this._monitor = undefined;
            this._order = undefined;
            this._parallelism = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._delay = value.delay;
            this._failureAction = value.failureAction;
            this._maxFailureRatio = value.maxFailureRatio;
            this._monitor = value.monitor;
            this._order = value.order;
            this._parallelism = value.parallelism;
        }
    }
    // delay - computed: false, optional: true, required: false
    _delay;
    get delay() {
        return this.getStringAttribute('delay');
    }
    set delay(value) {
        this._delay = value;
    }
    resetDelay() {
        this._delay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delayInput() {
        return this._delay;
    }
    // failure_action - computed: false, optional: true, required: false
    _failureAction;
    get failureAction() {
        return this.getStringAttribute('failure_action');
    }
    set failureAction(value) {
        this._failureAction = value;
    }
    resetFailureAction() {
        this._failureAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failureActionInput() {
        return this._failureAction;
    }
    // max_failure_ratio - computed: false, optional: true, required: false
    _maxFailureRatio;
    get maxFailureRatio() {
        return this.getStringAttribute('max_failure_ratio');
    }
    set maxFailureRatio(value) {
        this._maxFailureRatio = value;
    }
    resetMaxFailureRatio() {
        this._maxFailureRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxFailureRatioInput() {
        return this._maxFailureRatio;
    }
    // monitor - computed: false, optional: true, required: false
    _monitor;
    get monitor() {
        return this.getStringAttribute('monitor');
    }
    set monitor(value) {
        this._monitor = value;
    }
    resetMonitor() {
        this._monitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitorInput() {
        return this._monitor;
    }
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    // parallelism - computed: false, optional: true, required: false
    _parallelism;
    get parallelism() {
        return this.getNumberAttribute('parallelism');
    }
    set parallelism(value) {
        this._parallelism = value;
    }
    resetParallelism() {
        this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelismInput() {
        return this._parallelism;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service}
*/
export class Service extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_service";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Service to import
    * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Service to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_service", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/service docker_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_service',
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
        this._name = config.name;
        this._auth.internalValue = config.auth;
        this._convergeConfig.internalValue = config.convergeConfig;
        this._endpointSpec.internalValue = config.endpointSpec;
        this._labels.internalValue = config.labels;
        this._mode.internalValue = config.mode;
        this._rollbackConfig.internalValue = config.rollbackConfig;
        this._taskSpec.internalValue = config.taskSpec;
        this._updateConfig.internalValue = config.updateConfig;
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
    // auth - computed: false, optional: true, required: false
    _auth = new ServiceAuthOutputReference(this, "auth");
    get auth() {
        return this._auth;
    }
    putAuth(value) {
        this._auth.internalValue = value;
    }
    resetAuth() {
        this._auth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authInput() {
        return this._auth.internalValue;
    }
    // converge_config - computed: false, optional: true, required: false
    _convergeConfig = new ServiceConvergeConfigOutputReference(this, "converge_config");
    get convergeConfig() {
        return this._convergeConfig;
    }
    putConvergeConfig(value) {
        this._convergeConfig.internalValue = value;
    }
    resetConvergeConfig() {
        this._convergeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get convergeConfigInput() {
        return this._convergeConfig.internalValue;
    }
    // endpoint_spec - computed: false, optional: true, required: false
    _endpointSpec = new ServiceEndpointSpecOutputReference(this, "endpoint_spec");
    get endpointSpec() {
        return this._endpointSpec;
    }
    putEndpointSpec(value) {
        this._endpointSpec.internalValue = value;
    }
    resetEndpointSpec() {
        this._endpointSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointSpecInput() {
        return this._endpointSpec.internalValue;
    }
    // labels - computed: false, optional: true, required: false
    _labels = new ServiceLabelsList(this, "labels", true);
    get labels() {
        return this._labels;
    }
    putLabels(value) {
        this._labels.internalValue = value;
    }
    resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels.internalValue;
    }
    // mode - computed: false, optional: true, required: false
    _mode = new ServiceModeOutputReference(this, "mode");
    get mode() {
        return this._mode;
    }
    putMode(value) {
        this._mode.internalValue = value;
    }
    resetMode() {
        this._mode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode.internalValue;
    }
    // rollback_config - computed: false, optional: true, required: false
    _rollbackConfig = new ServiceRollbackConfigOutputReference(this, "rollback_config");
    get rollbackConfig() {
        return this._rollbackConfig;
    }
    putRollbackConfig(value) {
        this._rollbackConfig.internalValue = value;
    }
    resetRollbackConfig() {
        this._rollbackConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rollbackConfigInput() {
        return this._rollbackConfig.internalValue;
    }
    // task_spec - computed: false, optional: false, required: true
    _taskSpec = new ServiceTaskSpecOutputReference(this, "task_spec");
    get taskSpec() {
        return this._taskSpec;
    }
    putTaskSpec(value) {
        this._taskSpec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskSpecInput() {
        return this._taskSpec.internalValue;
    }
    // update_config - computed: false, optional: true, required: false
    _updateConfig = new ServiceUpdateConfigOutputReference(this, "update_config");
    get updateConfig() {
        return this._updateConfig;
    }
    putUpdateConfig(value) {
        this._updateConfig.internalValue = value;
    }
    resetUpdateConfig() {
        this._updateConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateConfigInput() {
        return this._updateConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            auth: serviceAuthToTerraform(this._auth.internalValue),
            converge_config: serviceConvergeConfigToTerraform(this._convergeConfig.internalValue),
            endpoint_spec: serviceEndpointSpecToTerraform(this._endpointSpec.internalValue),
            labels: cdktf.listMapper(serviceLabelsToTerraform, true)(this._labels.internalValue),
            mode: serviceModeToTerraform(this._mode.internalValue),
            rollback_config: serviceRollbackConfigToTerraform(this._rollbackConfig.internalValue),
            task_spec: serviceTaskSpecToTerraform(this._taskSpec.internalValue),
            update_config: serviceUpdateConfigToTerraform(this._updateConfig.internalValue),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth: {
                value: serviceAuthToHclTerraform(this._auth.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceAuthList",
            },
            converge_config: {
                value: serviceConvergeConfigToHclTerraform(this._convergeConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceConvergeConfigList",
            },
            endpoint_spec: {
                value: serviceEndpointSpecToHclTerraform(this._endpointSpec.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceEndpointSpecList",
            },
            labels: {
                value: cdktf.listMapperHcl(serviceLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ServiceLabelsList",
            },
            mode: {
                value: serviceModeToHclTerraform(this._mode.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceModeList",
            },
            rollback_config: {
                value: serviceRollbackConfigToHclTerraform(this._rollbackConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceRollbackConfigList",
            },
            task_spec: {
                value: serviceTaskSpecToHclTerraform(this._taskSpec.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceTaskSpecList",
            },
            update_config: {
                value: serviceUpdateConfigToHclTerraform(this._updateConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ServiceUpdateConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
