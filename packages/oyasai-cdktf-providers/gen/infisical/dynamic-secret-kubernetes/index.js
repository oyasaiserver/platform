// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca: cdktf.stringToTerraform(struct.ca),
        cluster_token: cdktf.stringToTerraform(struct.clusterToken),
        cluster_url: cdktf.stringToTerraform(struct.clusterUrl),
        enable_ssl: cdktf.booleanToTerraform(struct.enableSsl),
    };
}
export function dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ca: {
            value: cdktf.stringToHclTerraform(struct.ca),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_token: {
            value: cdktf.stringToHclTerraform(struct.clusterToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_url: {
            value: cdktf.stringToHclTerraform(struct.clusterUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_ssl: {
            value: cdktf.booleanToHclTerraform(struct.enableSsl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretKubernetesConfigurationApiConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._ca !== undefined) {
            hasAnyValues = true;
            internalValueResult.ca = this._ca;
        }
        if (this._clusterToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterToken = this._clusterToken;
        }
        if (this._clusterUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterUrl = this._clusterUrl;
        }
        if (this._enableSsl !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableSsl = this._enableSsl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ca = undefined;
            this._clusterToken = undefined;
            this._clusterUrl = undefined;
            this._enableSsl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ca = value.ca;
            this._clusterToken = value.clusterToken;
            this._clusterUrl = value.clusterUrl;
            this._enableSsl = value.enableSsl;
        }
    }
    // ca - computed: false, optional: true, required: false
    _ca;
    get ca() {
        return this.getStringAttribute('ca');
    }
    set ca(value) {
        this._ca = value;
    }
    resetCa() {
        this._ca = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caInput() {
        return this._ca;
    }
    // cluster_token - computed: false, optional: false, required: true
    _clusterToken;
    get clusterToken() {
        return this.getStringAttribute('cluster_token');
    }
    set clusterToken(value) {
        this._clusterToken = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterTokenInput() {
        return this._clusterToken;
    }
    // cluster_url - computed: false, optional: false, required: true
    _clusterUrl;
    get clusterUrl() {
        return this.getStringAttribute('cluster_url');
    }
    set clusterUrl(value) {
        this._clusterUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterUrlInput() {
        return this._clusterUrl;
    }
    // enable_ssl - computed: false, optional: true, required: false
    _enableSsl;
    get enableSsl() {
        return this.getBooleanAttribute('enable_ssl');
    }
    set enableSsl(value) {
        this._enableSsl = value;
    }
    resetEnableSsl() {
        this._enableSsl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableSslInput() {
        return this._enableSsl;
    }
}
export function dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_namespaces: cdktf.stringToTerraform(struct.allowedNamespaces),
        role: cdktf.stringToTerraform(struct.role),
        role_type: cdktf.stringToTerraform(struct.roleType),
    };
}
export function dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_namespaces: {
            value: cdktf.stringToHclTerraform(struct.allowedNamespaces),
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
        role_type: {
            value: cdktf.stringToHclTerraform(struct.roleType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretKubernetesConfigurationDynamicConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedNamespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedNamespaces = this._allowedNamespaces;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        if (this._roleType !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleType = this._roleType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedNamespaces = undefined;
            this._role = undefined;
            this._roleType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedNamespaces = value.allowedNamespaces;
            this._role = value.role;
            this._roleType = value.roleType;
        }
    }
    // allowed_namespaces - computed: false, optional: false, required: true
    _allowedNamespaces;
    get allowedNamespaces() {
        return this.getStringAttribute('allowed_namespaces');
    }
    set allowedNamespaces(value) {
        this._allowedNamespaces = value;
    }
    // Temporarily expose input value. Use with caution.
    get allowedNamespacesInput() {
        return this._allowedNamespaces;
    }
    // role - computed: false, optional: false, required: true
    _role;
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    // role_type - computed: false, optional: false, required: true
    _roleType;
    get roleType() {
        return this.getStringAttribute('role_type');
    }
    set roleType(value) {
        this._roleType = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleTypeInput() {
        return this._roleType;
    }
}
export function dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace),
        service_account_name: cdktf.stringToTerraform(struct.serviceAccountName),
    };
}
export function dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_name: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretKubernetesConfigurationStaticConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._serviceAccountName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccountName = this._serviceAccountName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
            this._serviceAccountName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
            this._serviceAccountName = value.serviceAccountName;
        }
    }
    // namespace - computed: false, optional: false, required: true
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // service_account_name - computed: false, optional: false, required: true
    _serviceAccountName;
    get serviceAccountName() {
        return this.getStringAttribute('service_account_name');
    }
    set serviceAccountName(value) {
        this._serviceAccountName = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccountNameInput() {
        return this._serviceAccountName;
    }
}
export function dynamicSecretKubernetesConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        api_config: dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct.apiConfig),
        audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.audiences),
        auth_method: cdktf.stringToTerraform(struct.authMethod),
        credential_type: cdktf.stringToTerraform(struct.credentialType),
        dynamic_config: dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct.dynamicConfig),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        static_config: dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct.staticConfig),
    };
}
export function dynamicSecretKubernetesConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        api_config: {
            value: dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct.apiConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationApiConfig",
        },
        audiences: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.audiences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        auth_method: {
            value: cdktf.stringToHclTerraform(struct.authMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential_type: {
            value: cdktf.stringToHclTerraform(struct.credentialType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamic_config: {
            value: dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct.dynamicConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationDynamicConfig",
        },
        gateway_id: {
            value: cdktf.stringToHclTerraform(struct.gatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        static_config: {
            value: dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct.staticConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretKubernetesConfigurationStaticConfig",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretKubernetesConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._apiConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiConfig = this._apiConfig?.internalValue;
        }
        if (this._audiences !== undefined) {
            hasAnyValues = true;
            internalValueResult.audiences = this._audiences;
        }
        if (this._authMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMethod = this._authMethod;
        }
        if (this._credentialType !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialType = this._credentialType;
        }
        if (this._dynamicConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamicConfig = this._dynamicConfig?.internalValue;
        }
        if (this._gatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatewayId = this._gatewayId;
        }
        if (this._staticConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticConfig = this._staticConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiConfig.internalValue = undefined;
            this._audiences = undefined;
            this._authMethod = undefined;
            this._credentialType = undefined;
            this._dynamicConfig.internalValue = undefined;
            this._gatewayId = undefined;
            this._staticConfig.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiConfig.internalValue = value.apiConfig;
            this._audiences = value.audiences;
            this._authMethod = value.authMethod;
            this._credentialType = value.credentialType;
            this._dynamicConfig.internalValue = value.dynamicConfig;
            this._gatewayId = value.gatewayId;
            this._staticConfig.internalValue = value.staticConfig;
        }
    }
    // api_config - computed: false, optional: true, required: false
    _apiConfig = new DynamicSecretKubernetesConfigurationApiConfigOutputReference(this, "api_config");
    get apiConfig() {
        return this._apiConfig;
    }
    putApiConfig(value) {
        this._apiConfig.internalValue = value;
    }
    resetApiConfig() {
        this._apiConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiConfigInput() {
        return this._apiConfig.internalValue;
    }
    // audiences - computed: false, optional: true, required: false
    _audiences;
    get audiences() {
        return this.getListAttribute('audiences');
    }
    set audiences(value) {
        this._audiences = value;
    }
    resetAudiences() {
        this._audiences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get audiencesInput() {
        return this._audiences;
    }
    // auth_method - computed: false, optional: false, required: true
    _authMethod;
    get authMethod() {
        return this.getStringAttribute('auth_method');
    }
    set authMethod(value) {
        this._authMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get authMethodInput() {
        return this._authMethod;
    }
    // credential_type - computed: false, optional: false, required: true
    _credentialType;
    get credentialType() {
        return this.getStringAttribute('credential_type');
    }
    set credentialType(value) {
        this._credentialType = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialTypeInput() {
        return this._credentialType;
    }
    // dynamic_config - computed: false, optional: true, required: false
    _dynamicConfig = new DynamicSecretKubernetesConfigurationDynamicConfigOutputReference(this, "dynamic_config");
    get dynamicConfig() {
        return this._dynamicConfig;
    }
    putDynamicConfig(value) {
        this._dynamicConfig.internalValue = value;
    }
    resetDynamicConfig() {
        this._dynamicConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dynamicConfigInput() {
        return this._dynamicConfig.internalValue;
    }
    // gateway_id - computed: false, optional: true, required: false
    _gatewayId;
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // static_config - computed: false, optional: true, required: false
    _staticConfig = new DynamicSecretKubernetesConfigurationStaticConfigOutputReference(this, "static_config");
    get staticConfig() {
        return this._staticConfig;
    }
    putStaticConfig(value) {
        this._staticConfig.internalValue = value;
    }
    resetStaticConfig() {
        this._staticConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticConfigInput() {
        return this._staticConfig.internalValue;
    }
}
export function dynamicSecretKubernetesMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function dynamicSecretKubernetesMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
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
export class DynamicSecretKubernetesMetadataOutputReference extends cdktf.ComplexObject {
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
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
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
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
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
export class DynamicSecretKubernetesMetadataList extends cdktf.ComplexList {
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
        return new DynamicSecretKubernetesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes}
*/
export class DynamicSecretKubernetes extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_dynamic_secret_kubernetes";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretKubernetes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretKubernetes to import
    * @param importFromId The id of the existing DynamicSecretKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretKubernetes to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_kubernetes", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretKubernetesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_kubernetes',
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
        this._configuration.internalValue = config.configuration;
        this._defaultTtl = config.defaultTtl;
        this._environmentSlug = config.environmentSlug;
        this._maxTtl = config.maxTtl;
        this._metadata.internalValue = config.metadata;
        this._name = config.name;
        this._path = config.path;
        this._projectSlug = config.projectSlug;
        this._usernameTemplate = config.usernameTemplate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // configuration - computed: false, optional: false, required: true
    _configuration = new DynamicSecretKubernetesConfigurationOutputReference(this, "configuration");
    get configuration() {
        return this._configuration;
    }
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration.internalValue;
    }
    // default_ttl - computed: false, optional: false, required: true
    _defaultTtl;
    get defaultTtl() {
        return this.getStringAttribute('default_ttl');
    }
    set defaultTtl(value) {
        this._defaultTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTtlInput() {
        return this._defaultTtl;
    }
    // environment_slug - computed: false, optional: false, required: true
    _environmentSlug;
    get environmentSlug() {
        return this.getStringAttribute('environment_slug');
    }
    set environmentSlug(value) {
        this._environmentSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentSlugInput() {
        return this._environmentSlug;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_ttl - computed: false, optional: true, required: false
    _maxTtl;
    get maxTtl() {
        return this.getStringAttribute('max_ttl');
    }
    set maxTtl(value) {
        this._maxTtl = value;
    }
    resetMaxTtl() {
        this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxTtlInput() {
        return this._maxTtl;
    }
    // metadata - computed: false, optional: true, required: false
    _metadata = new DynamicSecretKubernetesMetadataList(this, "metadata", true);
    get metadata() {
        return this._metadata;
    }
    putMetadata(value) {
        this._metadata.internalValue = value;
    }
    resetMetadata() {
        this._metadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata.internalValue;
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
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
    }
    // username_template - computed: false, optional: true, required: false
    _usernameTemplate;
    get usernameTemplate() {
        return this.getStringAttribute('username_template');
    }
    set usernameTemplate(value) {
        this._usernameTemplate = value;
    }
    resetUsernameTemplate() {
        this._usernameTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameTemplateInput() {
        return this._usernameTemplate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            configuration: dynamicSecretKubernetesConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretKubernetesMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            configuration: {
                value: dynamicSecretKubernetesConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretKubernetesConfiguration",
            },
            default_ttl: {
                value: cdktf.stringToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.stringToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.listMapperHcl(dynamicSecretKubernetesMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretKubernetesMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username_template: {
                value: cdktf.stringToHclTerraform(this._usernameTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
