// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function apiTokenConditionRequestIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.in),
        not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.notIn),
    };
}
export function apiTokenConditionRequestIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        in: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.in),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        not_in: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.notIn),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ApiTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
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
        if (this._in !== undefined) {
            hasAnyValues = true;
            internalValueResult.in = this._in;
        }
        if (this._notIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notIn = this._notIn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._in = undefined;
            this._notIn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._in = value.in;
            this._notIn = value.notIn;
        }
    }
    // in - computed: false, optional: true, required: false
    _in;
    get in() {
        return this.getListAttribute('in');
    }
    set in(value) {
        this._in = value;
    }
    resetIn() {
        this._in = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inInput() {
        return this._in;
    }
    // not_in - computed: false, optional: true, required: false
    _notIn;
    get notIn() {
        return this.getListAttribute('not_in');
    }
    set notIn(value) {
        this._notIn = value;
    }
    resetNotIn() {
        this._notIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notInInput() {
        return this._notIn;
    }
}
export function apiTokenConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        request_ip: apiTokenConditionRequestIpToTerraform(struct.requestIp),
    };
}
export function apiTokenConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        request_ip: {
            value: apiTokenConditionRequestIpToHclTerraform(struct.requestIp),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiTokenConditionRequestIp",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ApiTokenConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._requestIp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestIp = this._requestIp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requestIp.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requestIp.internalValue = value.requestIp;
        }
    }
    // request_ip - computed: false, optional: true, required: false
    _requestIp = new ApiTokenConditionRequestIpOutputReference(this, "request_ip");
    get requestIp() {
        return this._requestIp;
    }
    putRequestIp(value) {
        this._requestIp.internalValue = value;
    }
    resetRequestIp() {
        this._requestIp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestIpInput() {
        return this._requestIp.internalValue;
    }
}
export function apiTokenPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function apiTokenPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ApiTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
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
}
export class ApiTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
        return new ApiTokenPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function apiTokenPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        effect: cdktf.stringToTerraform(struct.effect),
        permission_groups: cdktf.listMapper(apiTokenPoliciesPermissionGroupsToTerraform, false)(struct.permissionGroups),
        resources: cdktf.stringToTerraform(struct.resources),
    };
}
export function apiTokenPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        effect: {
            value: cdktf.stringToHclTerraform(struct.effect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_groups: {
            value: cdktf.listMapperHcl(apiTokenPoliciesPermissionGroupsToHclTerraform, false)(struct.permissionGroups),
            isBlock: true,
            type: "list",
            storageClassType: "ApiTokenPoliciesPermissionGroupsList",
        },
        resources: {
            value: cdktf.stringToHclTerraform(struct.resources),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ApiTokenPoliciesOutputReference extends cdktf.ComplexObject {
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
        if (this._effect !== undefined) {
            hasAnyValues = true;
            internalValueResult.effect = this._effect;
        }
        if (this._permissionGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissionGroups = this._permissionGroups?.internalValue;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._effect = undefined;
            this._permissionGroups.internalValue = undefined;
            this._resources = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._effect = value.effect;
            this._permissionGroups.internalValue = value.permissionGroups;
            this._resources = value.resources;
        }
    }
    // effect - computed: false, optional: false, required: true
    _effect;
    get effect() {
        return this.getStringAttribute('effect');
    }
    set effect(value) {
        this._effect = value;
    }
    // Temporarily expose input value. Use with caution.
    get effectInput() {
        return this._effect;
    }
    // permission_groups - computed: false, optional: false, required: true
    _permissionGroups = new ApiTokenPoliciesPermissionGroupsList(this, "permission_groups", false);
    get permissionGroups() {
        return this._permissionGroups;
    }
    putPermissionGroups(value) {
        this._permissionGroups.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get permissionGroupsInput() {
        return this._permissionGroups.internalValue;
    }
    // resources - computed: false, optional: false, required: true
    _resources;
    get resources() {
        return this.getStringAttribute('resources');
    }
    set resources(value) {
        this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourcesInput() {
        return this._resources;
    }
}
export class ApiTokenPoliciesList extends cdktf.ComplexList {
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
        return new ApiTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_api_token";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiToken to import
    * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiToken to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiTokenConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_api_token',
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
        this._condition.internalValue = config.condition;
        this._expiresOn = config.expiresOn;
        this._name = config.name;
        this._notBefore = config.notBefore;
        this._policies.internalValue = config.policies;
        this._status = config.status;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // condition - computed: false, optional: true, required: false
    _condition = new ApiTokenConditionOutputReference(this, "condition");
    get condition() {
        return this._condition;
    }
    putCondition(value) {
        this._condition.internalValue = value;
    }
    resetCondition() {
        this._condition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition.internalValue;
    }
    // expires_on - computed: false, optional: true, required: false
    _expiresOn;
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    set expiresOn(value) {
        this._expiresOn = value;
    }
    resetExpiresOn() {
        this._expiresOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expiresOnInput() {
        return this._expiresOn;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // issued_on - computed: true, optional: false, required: false
    get issuedOn() {
        return this.getStringAttribute('issued_on');
    }
    // last_used_on - computed: true, optional: false, required: false
    get lastUsedOn() {
        return this.getStringAttribute('last_used_on');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
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
    // not_before - computed: false, optional: true, required: false
    _notBefore;
    get notBefore() {
        return this.getStringAttribute('not_before');
    }
    set notBefore(value) {
        this._notBefore = value;
    }
    resetNotBefore() {
        this._notBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notBeforeInput() {
        return this._notBefore;
    }
    // policies - computed: false, optional: false, required: true
    _policies = new ApiTokenPoliciesList(this, "policies", false);
    get policies() {
        return this._policies;
    }
    putPolicies(value) {
        this._policies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get policiesInput() {
        return this._policies.internalValue;
    }
    // status - computed: true, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            condition: apiTokenConditionToTerraform(this._condition.internalValue),
            expires_on: cdktf.stringToTerraform(this._expiresOn),
            name: cdktf.stringToTerraform(this._name),
            not_before: cdktf.stringToTerraform(this._notBefore),
            policies: cdktf.listMapper(apiTokenPoliciesToTerraform, false)(this._policies.internalValue),
            status: cdktf.stringToTerraform(this._status),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            condition: {
                value: apiTokenConditionToHclTerraform(this._condition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ApiTokenCondition",
            },
            expires_on: {
                value: cdktf.stringToHclTerraform(this._expiresOn),
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
            not_before: {
                value: cdktf.stringToHclTerraform(this._notBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policies: {
                value: cdktf.listMapperHcl(apiTokenPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApiTokenPoliciesList",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
