// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretApprovalPolicyApproversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        type: cdktf.stringToTerraform(struct.type),
        username: cdktf.stringToTerraform(struct.username),
    };
}
export function secretApprovalPolicyApproversToHclTerraform(struct) {
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
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
export class SecretApprovalPolicyApproversOutputReference extends cdktf.ComplexObject {
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
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
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
            this.resolvableValue = undefined;
            this._id = undefined;
            this._type = undefined;
            this._username = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._type = value.type;
            this._username = value.username;
        }
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
export class SecretApprovalPolicyApproversList extends cdktf.ComplexList {
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
        return new SecretApprovalPolicyApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy}
*/
export class SecretApprovalPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_approval_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretApprovalPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretApprovalPolicy to import
    * @param importFromId The id of the existing SecretApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretApprovalPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_approval_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretApprovalPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_approval_policy',
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
        this._allowSelfApproval = config.allowSelfApproval;
        this._approvers.internalValue = config.approvers;
        this._enforcementLevel = config.enforcementLevel;
        this._environmentSlug = config.environmentSlug;
        this._environmentSlugs = config.environmentSlugs;
        this._name = config.name;
        this._projectId = config.projectId;
        this._requiredApprovals = config.requiredApprovals;
        this._secretPath = config.secretPath;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_self_approval - computed: true, optional: true, required: false
    _allowSelfApproval;
    get allowSelfApproval() {
        return this.getBooleanAttribute('allow_self_approval');
    }
    set allowSelfApproval(value) {
        this._allowSelfApproval = value;
    }
    resetAllowSelfApproval() {
        this._allowSelfApproval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowSelfApprovalInput() {
        return this._allowSelfApproval;
    }
    // approvers - computed: false, optional: false, required: true
    _approvers = new SecretApprovalPolicyApproversList(this, "approvers", true);
    get approvers() {
        return this._approvers;
    }
    putApprovers(value) {
        this._approvers.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get approversInput() {
        return this._approvers.internalValue;
    }
    // enforcement_level - computed: true, optional: true, required: false
    _enforcementLevel;
    get enforcementLevel() {
        return this.getStringAttribute('enforcement_level');
    }
    set enforcementLevel(value) {
        this._enforcementLevel = value;
    }
    resetEnforcementLevel() {
        this._enforcementLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforcementLevelInput() {
        return this._enforcementLevel;
    }
    // environment_slug - computed: false, optional: true, required: false
    _environmentSlug;
    get environmentSlug() {
        return this.getStringAttribute('environment_slug');
    }
    set environmentSlug(value) {
        this._environmentSlug = value;
    }
    resetEnvironmentSlug() {
        this._environmentSlug = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentSlugInput() {
        return this._environmentSlug;
    }
    // environment_slugs - computed: false, optional: true, required: false
    _environmentSlugs;
    get environmentSlugs() {
        return this.getListAttribute('environment_slugs');
    }
    set environmentSlugs(value) {
        this._environmentSlugs = value;
    }
    resetEnvironmentSlugs() {
        this._environmentSlugs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentSlugsInput() {
        return this._environmentSlugs;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: true, required: false
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
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // required_approvals - computed: false, optional: false, required: true
    _requiredApprovals;
    get requiredApprovals() {
        return this.getNumberAttribute('required_approvals');
    }
    set requiredApprovals(value) {
        this._requiredApprovals = value;
    }
    // Temporarily expose input value. Use with caution.
    get requiredApprovalsInput() {
        return this._requiredApprovals;
    }
    // secret_path - computed: false, optional: false, required: true
    _secretPath;
    get secretPath() {
        return this.getStringAttribute('secret_path');
    }
    set secretPath(value) {
        this._secretPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretPathInput() {
        return this._secretPath;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_self_approval: cdktf.booleanToTerraform(this._allowSelfApproval),
            approvers: cdktf.listMapper(secretApprovalPolicyApproversToTerraform, false)(this._approvers.internalValue),
            enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            environment_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentSlugs),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            required_approvals: cdktf.numberToTerraform(this._requiredApprovals),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allow_self_approval: {
                value: cdktf.booleanToHclTerraform(this._allowSelfApproval),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            approvers: {
                value: cdktf.listMapperHcl(secretApprovalPolicyApproversToHclTerraform, false)(this._approvers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "SecretApprovalPolicyApproversList",
            },
            enforcement_level: {
                value: cdktf.stringToHclTerraform(this._enforcementLevel),
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
            environment_slugs: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentSlugs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            required_approvals: {
                value: cdktf.numberToHclTerraform(this._requiredApprovals),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
